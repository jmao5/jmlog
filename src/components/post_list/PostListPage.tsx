import CategoryList from './CategoryList';
import PostCard from './PostCard';
import { getAllPostCount, getCategoryDetailList, getSortedPostList } from '@/lib/post';

interface PostListProps {
  category?: string;
}

const PostListPage = async ({ category }: PostListProps) => {
  const postList = await getSortedPostList(category);
  const categoryList = await getCategoryDetailList();
  const allPostCount = await getAllPostCount();

  return (
    <section className='mx-auto mt-12 w-full max-w-[950px] px-4'>
      <CategoryList
        allPostCount={allPostCount}
        categoryList={categoryList}
        currentCategory={category}
      />
      <section className=''>
        <ul className='grid grid-cols-1 gap-3 md:grid-cols-1 lg:gap-4'>
          {postList.map((post) => (
            <PostCard key={post.url + post.date} post={post} />
          ))}
        </ul>
      </section>
    </section>
  );
};

export default PostListPage;
