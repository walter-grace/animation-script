import { useSpring, animated, config } from 'react-spring';
import { Layout, Text, Page } from '@vercel/examples-ui';
import { Chat } from '../components/Chat';
import { createRipples } from 'react-ripples';

const MyRipples = createRipples({
  color: 'purple',
  during: 2200,
});

function Home() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.gentle,
  });

  const textFadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.slow
  });

  return (
    <animated.div style={fadeIn}>
      <div style={{ background: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)', backgroundSize: 'cover' }}>
        <Page className="flex flex-col gap-6 md:gap-12">
          <section className="flex flex-col gap-4 md:gap-6">
            <animated.div style={textFadeIn}>
              <Text variant="h1">Scene Doc</Text>
              <Text variant="h1" className="text-sm md:text-lg italic">
                Craft cinematic gold with Scene Doc - your go-to hub for screenwriting finesse.
                Inject life into your scenes, let them leap off the page, and even concoct the perfect shot list and shot types. 
              </Text>
            </animated.div>
          </section>
          <section className="flex flex-col gap-2 md:gap-3">
            <Text variant="h1">Unleash the Spielberg in You with <i>Scripty</i></Text>
            
            <Text>
              Start by pasting in your scene in below &#8595;
            </Text>
            <div className="w-full md:w-2/3">
              <Chat />
            </div>
          </section>
        </Page>
      </div>
    </animated.div>
  );
}

Home.Layout = Layout

export default Home
