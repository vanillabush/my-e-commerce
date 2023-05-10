// ./src/lib/sanity.client.ts

import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';


export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION // "2023-05-06"
export const token = process.env.SANITY_SECRET_TOKEN

export const client = createClient({projectId, dataset, apiVersion, token, useCdn: true})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);




