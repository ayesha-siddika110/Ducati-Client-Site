
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useBlogs = () => {
    const axiosPublic = useAxiosPublic()
  const { data: Blogs = [], isLoading, refetch } = useQuery({
    queryKey: ['Blogs'],
    queryFn: async () => {
        const res = await axiosPublic.get(`/blogs`);
        return res.data.reverse()
    }
})

//    console.log('blogs', Blogs)
    
    return [Blogs,isLoading,refetch]
};

export default useBlogs;