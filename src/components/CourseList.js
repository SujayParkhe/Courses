import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import { Link } from 'react-router-dom';

const CourseList = () => {
    const [courseData, setCourseData] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "post"] {
            title,
            slug,
            price,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setCourseData(data))
        .catch(console.error);
    }, []);

    return (
       <main className="bg-red-100 min-h-screen p-12">
           <section className="container mx-auto">
               <h1 className="text-5xl flex justify-center">Course Lists </h1>
               <h2 className="text-lg text-gray-600 flex justify-center mb-12">Browse through some of our courses</h2>
               <div className="grid md:grid-cols-2 lg:grid-cols-3">
                   {courseData && courseData.map((post, index) => (
                     <article className="mx-2 my-2">
                       <Link to={"/course/" + post.slug.current} key={post.slug.current}>
                       <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-red-400" key={index}>
                           <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-full rounded-r object-cover absolute"/>
                           <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                               <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                                   {post.title}
                                   <p className="text-gray-200">{post.price}</p>
                               </h3>
                           </span>
                       </span>
                       </Link>
                    </article>
                   ))}
               </div>
           </section>
       </main>
    )
}

export default CourseList;