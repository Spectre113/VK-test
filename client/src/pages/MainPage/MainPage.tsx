import { useEffect, useMemo, useRef, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import './MainPage.css';

import { CatsTabs } from '../../components/CatsTabs/CatsTabs';
import { CatsList } from '../../components/CatsList/CatsList';
import { fetchCats } from '../../api/cats';
import { Spinner } from '../../components/Spinner/Spinner';

type Tab = 'all' | 'favorites';

const PAGE_SIZE = 15;

export const MainPage = () => {
  const [tab, setTab] = useState<Tab>('all');
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const {
    data,
    isPending,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['cats'],
    queryFn: ({ pageParam }) => fetchCats(pageParam),
    initialPageParam: 0,
    staleTime: 1000 * 60 * 5,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < PAGE_SIZE) {
        return undefined;
      }

      return allPages.length;
    },
  });

  const cats = useMemo(() => {
    return data?.pages.flat() ?? [];
  }, [data]);

  const visibleCats = useMemo(() => {
    if (tab === 'favorites') {
      return cats.filter((cat) => favoriteIds.includes(cat.id));
    }

    return cats;
  }, [cats, tab, favoriteIds]);

  const toggleFavorite = (id: string) => {
    setFavoriteIds((prev) =>
      prev.includes(id)
        ? prev.filter((favoriteId) => favoriteId !== id)
        : [...prev, id],
    );
  };

  useEffect(() => {
    const node = loadMoreRef.current;

    if (!node || !hasNextPage || tab !== 'all') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];

        if (firstEntry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        root: null,
        rootMargin: '200px',
        threshold: 0,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, tab]);

  return (
    <>
      <header className="header">
        <div className="container">
          <CatsTabs activeTab={tab} onChange={setTab} />
        </div>
      </header>

      <main className="main">
        <div className="container">
          {isPending && <Spinner />}

          {isError && <p>{error.message}</p>}

          {!isPending && !isError && (
            <>
              <CatsList
                cats={visibleCats}
                favoriteIds={favoriteIds}
                onToggleFavorite={toggleFavorite}
              />

              {tab === 'all' && (
                <div ref={loadMoreRef} className="main__observer" />
              )}

              {isFetchingNextPage && (
                <p className="load-more">... Загружаем еще котиков ...</p>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
};
