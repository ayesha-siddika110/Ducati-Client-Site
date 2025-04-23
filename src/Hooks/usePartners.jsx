
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const usePartners = () => {
    const axiosPublic = useAxiosPublic()
  const { data: partners = [], isLoading, refetch } = useQuery({
    queryKey: ['partners'],
    queryFn: async () => {
        const res = await axiosPublic.get(`/partners`);
        return res.data.reverse()
    }
})

//    console.log('partners', partners)
    
    return [partners,isLoading,refetch]
};

export default usePartners;