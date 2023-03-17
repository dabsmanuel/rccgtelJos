import { createClient } from "contentful";

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export const getBlogPosts = async () =>{
    const response = await client.getEntries({
        content_type: 'blogPost',
        order: '-fields.category',
    });
    return response.items.map((item) =>({
        slug: item.fields.slug,
        title: item.fields.title,
        content: item.fields.content,
        category: item.fields.category,
        image: item.fields.image.fields.file,
    }));
};

export const getBlogPostBySlug = async(slug) =>{
    const response = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug' : slug,
    });
    if (response.items.length > 0){
        const post = response.items[0].fields;
        return{
            slug: post.slug,
            title: post.title,
            content: post.content,
            category: post.category,
            image: post.image.fields.file,
        };
    }
    return null;
}