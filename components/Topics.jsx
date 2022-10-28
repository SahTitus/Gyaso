// import React from "react";
// import { Footer } from "./Footer";
// import Topic from './Topic'
// import styles from "../styles/Explore.module.css";
// import { Box, Button, CircularProgress } from "@mui/material";
// import Head from "next/head";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchTopics,
//   fetchMoreTopics,
//   searchMoreTopics,
// } from "../lib/topics";
// import { getTopicsSSR, loading } from "../redux/topics";
// import { connectToDb } from "../utils/mongodb";
// import { useStateContex } from "../store/StateProvider";
// import SearchAvatar from "../assets/SearchAvatar.jpg";

// const Topics = ({ topicsSSR }) => {
//   const dispatch = useDispatch();
//   const { topics } = useSelector((state) => state.topics);
//   const [hasMore, setHasMore] = useState(true);
//   const { queriedTopics, isLoading } = useSelector((state) => state.topics);
//   const { searchTerm } = useStateContex();

//   const getMorePost = async () => {
//     if (queriedTopics.length > 0 && searchTerm.length > 0) {
//       dispatch(searchMoreTopics(searchTerm, queriedTopics.length));
//     } else {
//       dispatch(fetchMoreTopics(topics.length));
//     }
//   };

//   useEffect(() => {
//     if (topicsSSR.length > 0) dispatch(getTopicsSSR(topicsSSR));
//     dispatch(fetchTopics(topicsSSR.length));
//   }, []);

//   return (
//     <div className={styles.topics}>
//       {!isLoading && queriedTopics.length === 0 && !!searchTerm.length ? (
//         <div className={styles.searchIcon__wrapper}>
//           <div className={styles.card__image}>
//             <Image
//               className={styles.image}
//               src={SearchAvatar}
//               alt="Search Icon"
//               placeholder="blur"
//               height={300}
//               width={300}
//               blurDataURL={SearchAvatar}
//             />
//           </div>

//           <h3>No results found</h3>
//         </div>
//       ) : !!searchTerm.length && queriedTopics.length > 0 ? (
//         <InfiniteScroll
//           className={`${styles.topics__wrapper}`}
//           dataLength={queriedTopics.length}
//           next={getMorePost}
//           hasMore={hasMore}
//           loader={
//             <Box className={styles.loadingState}>
//               <CircularProgress className={styles.progress} />
//             </Box>
//           }
//           endMessage={<h4>Nothing more to show</h4>}
//         >
//           {queriedTopics.map((topic, i) => (
//             <Topic
//               key={topic._id + i}
//               // more="false"
//               link={topic.link}
//               topic={topic.title}
//               source={topic.source}
//             />
//           ))}
//         </InfiniteScroll>
//       ) : (
//         <InfiniteScroll
//           className={`${styles.topics__wrapper}`}
//           dataLength={topics.length}
//           next={getMorePost}
//           hasMore={hasMore}
//           loader={
//             <Box className={styles.loadingState}>
//               <CircularProgress className={styles.progress} />
//             </Box>
//           }
//           endMessage={<h4>Nothing more to show</h4>}
//         >
//           {topics.map((topic, i) => (
//             <Topic
//               key={topic._id + i}
//               // more="false"
//               link={topic.link}
//               topic={topic.title}
//               source={topic.source}
//             />
//           ))}
//         </InfiniteScroll>
//       )}

//       <Footer />
//     </div>
//   );
// };

// export const getServerSideProps = async () => {
//   const { db } = await connectToDb();
//   const data = await db
//     .collection("topics")
//     .find()
//     .sort({ title: 1 })
//     .limit(20)
//     .toArray();
//   // console.log('ssr',data)
//   const topicsSSR = JSON.parse(JSON.stringify(data));

//   return {
//     props: { topicsSSR },
//   };
// };

// export default Topics;
