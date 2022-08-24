import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = SanityClient({
    projectId: "bdlteb0i",
    dataset: "production",
    apiVersion: "2022-08-24",
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})