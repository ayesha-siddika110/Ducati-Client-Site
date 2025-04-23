
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useCertification = () => {
    const axiosPublic = useAxiosPublic()
  const { data: certification = [], isLoading, refetch } = useQuery({
    queryKey: ['certification'],
    queryFn: async () => {
        const res = await axiosPublic.get(`/certification`);
        return res.data.reverse()
    }
})

//    console.log('certification', certification)
    
    return [certification,isLoading,refetch]
};

export default useCertification;