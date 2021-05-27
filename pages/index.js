import styles from '../styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ViewSource from '../components/view-source';

const Code = (p) => <code className={styles.inlineCode} {...p} />;

const Index = () => (
  <div className={styles.container}>
    <ViewSource pathname='pages/index.js' />
    <div className={styles.card}>
      <h1>Image Component with Next.js</h1>
      <hr className={styles.hr} />
      <h2 id='external-2'>External CDN Image</h2>
      <Image
        alt='Next.js logo'
        src='https://d2n1n6byqxibyi.cloudfront.net/rendition/933560888063/image_rrait38u4d18d0jm4rt4vi1h7m/-FJPG'
        width={1200}
        height={300}
        objectFit='contain'
      />
      <Image
        alt='Next.js logo'
        src='https://d2n1n6byqxibyi.cloudfront.net/image/933560888063/image_rrait38u4d18d0jm4rt4vi1h7m/-FJPG'
        width={1200}
        height={300}
        objectFit='contain'
      />
      <Image
        alt='Next.js logo'
        src='https://d2n1n6byqxibyi.cloudfront.net/rendition/933560888063/image_rrait38u4d18d0jm4rt4vi1h7m/-FJPG-C2010x558.3333333333333,0,8.77217866768658'
        width={1200}
        height={300}
        objectFit='contain'
      />
      <hr className={styles.hr} />
      <h2 id='more'>Learn More</h2>
      <p>You can optionally configure a cloud provider, device sizes, and more!</p>
      <p>
        Checkout the{' '}
        <a href='https://nextjs.org/docs/basic-features/image-optimization'>
          Image Optimization documentation
        </a>{' '}
        to learn more.
      </p>
    </div>
  </div>
);

export default Index;
