// Component gốc chịu trách nhiệm lấy dữ liệu
// import ViewBlogs from '../omd_ViewBlogs';

// export default function DataViewBlogs() {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         async function fetchData() {
//             const res = await fetch('https://ic71303-hide.onrender.com/api/posts');
//             const result = await res.json();
//             setData(result);
//         }
//         fetchData();
//     }, []);

//     return data ? <ViewBlogs data={data} /> : <div>Loading...</div>;
// }



import { GetStaticProps } from 'next';
import ViewBlogs from '../omd_ViewBlogs';
import { Post } from '@/types/api_post';

interface DataViewBlogsProps {
    data: Post[]; // Định nghĩa kiểu dữ liệu của props
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://ic71303-hide.onrender.com/api/posts');
    const result = await res.json();
    
    // Kiểm tra dữ liệu trước khi trả về
    const data: Post[] = result.data || []; // Đảm bảo rằng data không bị undefined

    return {
        props: { data }, // Truyền data vào props
        revalidate: 60, // Thời gian revalidate (60 giây)
    };
};

export default function DataViewBlogs({ data }: DataViewBlogsProps) {
    return <ViewBlogs data={data} />; // Truyền dữ liệu vào component ViewBlogs
}
