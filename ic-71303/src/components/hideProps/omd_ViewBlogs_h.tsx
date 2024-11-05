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



// import { GetStaticProps } from 'next';
// import ViewBlogs from '../omd_ViewBlogs';
// import { Post } from '@/types/api_post';


// interface DataViewBlogsProps {
//     data: Post[];
//   }
  
  
// export const getStaticProps: GetStaticProps = async () => {
//     console.log('Fetching data from API...');
  
//     try {
//       const res = await fetch('https://ic71303-hide.onrender.com/api/posts');
//       const result = await res.json();
  
//       console.log('Data fetched:', result); // Kiểm tra dữ liệu đã lấy về
  
//       // Lấy dữ liệu từ result.data
//       return {
//         props: { data: result.data || [] }, // Chỉ lấy data từ kết quả API
//         revalidate: 60, // Revalidate sau 60 giây
//       };
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       return {
//         props: { data: [] },
//       };
//     }
//   };
  
//   export default function DataViewBlogs({ data }: DataViewBlogsProps) {
//     return <ViewBlogs data={data} />;
//   }