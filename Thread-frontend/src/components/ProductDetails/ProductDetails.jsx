import { StarIcon } from '@heroicons/react/20/solid';
import { Box, Button, Grid, GridLegacy, LinearProgress, Rating } from '@mui/material';
import ProductReviewCard from './ProductReviewCard';
import { mens_kurta } from '../../Data/mens_kurta'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
        { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
        { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
    ],
    sizes: [

        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },

    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options...',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees...',
};

const reviews = { href: '#', average: 4, totalCount: 117 };

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function ProductDetails() {
    return (
        <div className="bg-white lg:px-20">
            <div className="pt-6">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb">
                    <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        className="h-5 w-4 text-gray-300"
                                        fill="currentColor"
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                {/* Image gallery */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
                    <div className="flex flex-col items-center">
                        <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                            <img
                                alt={product.images[0].alt}
                                src={product.images[0].src}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="flex flex-wrap space-x-5 justify-center">
                            {product.images.map((item) => (
                                <div
                                    key={item.src}
                                    className="aspect-h-2 aspect-w-2 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
                                >
                                    <img
                                        alt={item.alt}
                                        src={item.src}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
                        <div className="lg:col-span-2">
                            <h1 className="text-lg lg:text-xl font-semibold text-gray-900">
                                Universaloutfit
                            </h1>
                            <h1 className='text-lg lg:text-xl text-gray-900 opacity-60 pt-1'>
                                Casual Puff Sleeves Solid Women White Top
                            </h1>
                        </div>

                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
                                <p className='font-semibold'>
                                    LKR199
                                </p>
                                <p className='opacity-50 line-through'>
                                    LKR211
                                </p>
                                <p className='text-green-600 font-semibold'>
                                    5% off
                                </p>
                            </div>

                            {/* Reviews */}
                            <div className="mt-6">
                                <div className='flex items-center space-x-3'>
                                    <Rating name='read-only' value={5.5} readOnly />
                                    <p className='opacity-50 text-sm'>56540 Ratings</p>
                                    <p className='ML-3 TEXT-SM font-medium text-indigo-600 hover:text-indigo-500'>3870 Rewiews</p>
                                </div>

                            </div>

                            {/* Product Options */}
                            <form className="mt-10">

                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                            Size guide
                                        </a>
                                    </div>
                                    <fieldset className="mt-4">
                                        <div className="grid grid-cols-4 gap-3">
                                            {product.sizes.map((size) => (
                                                <label
                                                    key={size.name}
                                                    className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3"
                                                >
                                                    <input
                                                        defaultValue={size.name}
                                                        defaultChecked={size.name === 'S'}
                                                        name="size"
                                                        type="radio"
                                                        disabled={!size.inStock}
                                                        className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                                                    />
                                                    <span className="text-sm font-medium uppercase group-has-checked:text-white">
                                                        {size.name}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </fieldset>
                                </div>

                                <Button variant='contained' sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}>
                                    Add To Cart
                                </Button>
                            </form>
                        </div>

                        {/* Description & Highlights */}
                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                            <div>
                                <h3 className="sr-only">Description</h3>
                                <p className="text-base text-gray-900">{product.description}</p>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                                <ul className="mt-4 list-disc space-y-2 pl-4 text-sm">
                                    {product.highlights.map((highlight) => (
                                        <li key={highlight} className="text-gray-400">
                                            <span className="text-gray-600">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                                <p className="mt-4 text-sm text-gray-600">{product.details}</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* rating and reviews */}
                <section>
                    <h1 className="font-semibold text-lg pb-4">Recent Review & Rating</h1>
                    <div className="border p-5">
                        <Grid container spacing={7}>
                            {/* Left Side: Reviews */}
                            <Grid item xs={7}>
                                <div className="space-y-5">
                                    {[1, 1, 1].map((item, index) => (
                                        <ProductReviewCard key={index} />
                                    ))}
                                </div>
                            </Grid>

                            {/* Right Side: Rating Summary */}

                            <Grid item xs={5} className="ml-100">
                                <h1 className="text-xl font-semibold pb-1">Product Ratings</h1>
                                <div className="flex items-center space-x-3 mb-4">
                                    <Rating value={4.6} precision={0.5} readOnly />
                                    <p className="opacity-60">54,890 Ratings</p>
                                </div>

                                {/* Rating Breakdown */}
                                <Box className="mt-5">

                                    <Grid item xs={2}>
                                        <p>Excellent</p>

                                        <Grid item xs={7}>
                                            <LinearProgress
                                                variant="determinate"
                                                value={40}
                                                color="success"
                                                sx={{
                                                    bgcolor: "#d0d0d0",
                                                    borderRadius: 4,
                                                    height: 7,
                                                    width: '100%'
                                                }}
                                            />
                                        </Grid></Grid>


                                    <Grid item xs={2}>
                                        <p>Vary Good</p>

                                        <Grid item xs={7}>
                                            <LinearProgress
                                                variant="determinate"
                                                value={30}
                                                color="success"
                                                sx={{
                                                    bgcolor: "#d0d0d0",
                                                    borderRadius: 4,
                                                    height: 7,
                                                    width: '100%'
                                                }}
                                            />
                                        </Grid>



                                        <Grid item xs={2}>
                                            <p>Good</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress
                                                variant="determinate"
                                                value={25}
                                                
                                                sx={{
                                                    bgcolor: "#d0d0d0",
                                                    borderRadius: 4,
                                                    height: 7,
                                                    width: '100%',
                                                    color:'yellow'
                                                }}
                                            />
                                        </Grid></Grid>



                                    <Grid item xs={2}>
                                        <p>Avarahe</p>

                                        <Grid item xs={7}>
                                            <LinearProgress
                                                variant="determinate"
                                                value={20}
                                                color="warning"
                                                sx={{
                                                    bgcolor: "#d0d0d0",
                                                    borderRadius: 4,
                                                    height: 7,
                                                    width: '100%'
                                                }}
                                            />
                                        </Grid></Grid>



                                    <Grid item xs={2}>
                                        <p>Poor</p>

                                        <Grid item xs={7}>
                                            <LinearProgress
                                                variant="determinate"
                                                value={15}
                                                color="error"
                                                sx={{
                                                    bgcolor: "#d0d0d0",
                                                    borderRadius: 4,
                                                    height: 7,
                                                    width: '100%'
                                                }}
                                            />
                                        </Grid></Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </section>

                {/* similer products */}
                <section className='pt-10'>
                   <h1 className='py-5 text-xl font-bold'>Similer Products</h1>
                   <div className='flex flex-wrap space-y-5'>
                        {mens_kurta.map((item)=><HomeSectionCard product={item}/>)}
                   </div>
                </section>
            </div>

        </div>
    );
}
