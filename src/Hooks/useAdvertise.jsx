
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAdvertise = () => {
    const axiosPublic = useAxiosPublic()
  const { data: advertise = [], isLoading, refetch } = useQuery({
    queryKey: ['advertise'],
    queryFn: async () => {
        const res = await axiosPublic.get(`/advertise`);
        return res.data.reverse()
    }
})

//    console.log('advertise', advertise)
    
    return [advertise,isLoading,refetch]
};

export default useAdvertise;