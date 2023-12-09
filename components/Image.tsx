// import NextImage, { ImageProps } from 'next/image'

// const Image = ({ ...rest }: ImageProps) => <NextImage {...rest} />

// export default Image

// import NextImage, { ImageProps } from 'next/image'

// const Image = ({ src, ...rest }: ImageProps) => (
//     <img src={`/lkkBlog${src}`} {...rest} />
// )

// export default Image

// eslint-disable-next-line jsx-a11y/alt-text
// eslint-disable-next-line @next/next/no-img-element
const Image = ({ src, ...rest }) => <img alt="" src={`/lkkBlog${src}`} {...rest} />

export default Image
