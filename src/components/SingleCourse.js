import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const buidler = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return buidler.image(source)
}

const SingleCourse = () => {
    const [singleCourse, setSingleCourse] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient
        .fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            price,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image,
        }`).then((data) => setSingleCourse(data[0]))
        .catch(console.error)
    }, [slug]);

    if(!singleCourse) return <div>Loading...</div>

    return(
        <main className="bg-gray-200 min-h-screen p-12">
            <article className="container">
                <header className="relative">
                    <div className="absolute h-full w-full items-center justify-center p-8">
                        <div className="bg-white bg-opacity-75 rounded p-12"> 
                            <h1 className="text-3xl lg:text-6xl mb-4">{singleCourse.title}</h1>
                            <p className="text-bold">Price: {singleCourse.price}</p>
                                <div className="flex justify-center text-gray-800">
                                    <img src={urlFor(singleCourse.authorImage).url()} alt={singleCourse.name} className="w-10 h-10 rounded-full" />
                                    <p className="flex items-center pl-2 text-2xl">{singleCourse.name}</p>
                                </div>
                        </div>
                        </div>
                        <img src={singleCourse.mainImage.asset.url} alt={singleCourse.title} className="w-full object-cover rounded-t" style={{ height: "400px" }} />
                </header>
            </article>
            <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                    <BlockContent blocks={singleCourse.body} projectId="est595m1" dataset="production" />
            </div>
        </main>
    )
}

export default SingleCourse;