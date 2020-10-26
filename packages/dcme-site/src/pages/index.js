// @flow
import React from 'react';
import {Anchor} from 'dcme-style/src/deprecated';
import {Box} from 'dcme-style/src/deprecated';
import {DocsHeader} from 'dcme-style/src/deprecated';
import {ContentNav} from 'dcme-style/src/deprecated';
import {Link as HtmlLink} from 'dcme-style/src/deprecated';
import {Text} from 'dcme-style/src/deprecated';

import FeatureItem from '../component/FeatureItem';
import FeatureStrip from '../component/FeatureStrip';
import Link from '../component/Link';
import Layout from '../layout/Layout';
import DataparcelsThumbnail from '../content/dataparcels-thumbnail.gif';
import UnmutableThumbnail from '../content/unmutable-thumbnail.gif';

import BazzFuzzFaceThumbnail from '../content/bazz-fuzz-face-thumbnail.jpg';
import Blend2Thumbnail from '../content/blend2-thumbnail.jpg';
import DxlfoThumbnail from '../content/dxlfo-thumbnail.jpg';
import ShooshThumbnail from '../content/shoosh-thumbnail.jpg';

import ResponsiveAnalogReadThumbnail from '../content/responsive-analog-read-thumbnail.jpg';
import AnalogMultiButtonThumbnail from '../content/analog-multi-button-thumbnail.jpg';
import ArduinoTapTempoThumbnail from '../content/arduino-tap-tempo-thumbnail.jpg';

import FunThumbnail from '../content/fun-thumbnail.jpg';
import HowToAssembleLegoRobotThumbnail from '../content/how-to-assemble-lego-robot-thumbnail.jpg';
import SkateTricksThumbnail from '../content/skate-tricks-thumbnail.jpg';

import BloxorzThumbnail from '../content/bloxorz-thumbnail.jpg';
import SilversphereThumbnail from '../content/silversphere-thumbnail.jpg';
import Electricman2Thumbnail from '../content/electricman-2-thumbnail.jpg';

export default () => {

    let javascriptLibraries = <Box modifier="paddingBottomTera">
        <Anchor name="Javascript libraries" />
        <Text element="h2" modifier="sizeKilo marginKilo">Javascript libraries</Text>
        <FeatureItem
            alt
            name="mobx-fog-of-war"
            href="https://92green.github.io/mobx-fog-of-war"
            docs="https://92green.github.io/mobx-fog-of-war"
            github="92green/mobx-fog-of-war"
            npm="mobx-fog-of-war"
            description="A simple, lazy front-end request coordinator and cache for React and mobx. Load your data by simply trying to view it, and build up a picture of your server's data over time."
            image="https://user-images.githubusercontent.com/345320/91411571-ddf2da80-e88b-11ea-8de7-c0f3462991f4.gif"
        />
        <FeatureItem
            alt
            name="unmutable"
            href="https://92green.github.io/unmutable"
            docs="https://92green.github.io/unmutable"
            github="92green/unmutable"
            npm="unmutable"
            description="An immutable, point-free, functional data collection library for plain old Javascript."
            image={UnmutableThumbnail}
        />
        <FeatureItem
            alt
            name="react-floatybox"
            href="https://92green.github.io/react-floatybox"
            docs="https://92green.github.io/react-floatybox"
            github="92green/react-floatybox"
            npm="react-floatybox"
            description="React portal based positional components for building tooltips, select menus and dropdown. Avoids screen edges!"
        />
        <FeatureItem
            alt
            name="react-micromount"
            href="https://github.com/92green/react-micromount"
            github="92green/react-micromount"
            npm="unmutable"
            description="Mount React instances inside each other like they're components."
        />
    </Box>;

    let effectsPedals = <Box modifier="paddingBottomTera">
        <Anchor name="Effects pedals" />
        <Text element="h2" modifier="sizeKilo marginKilo">Effects pedals</Text>
        <FeatureItem
            name="Blend2"
            to="/effects-pedals/blend2"
            link="more info"
            description="A microprocessor-controlled parallel effects loop blender. Original design, prototype complete."
            image={Blend2Thumbnail}
            alt
        />
        <FeatureItem
            name="Shoosh"
            to="/effects-pedals/shoosh"
            link="more info"
            description={<Text>A vactrol-based voltage controlled amplifier. Original design, prototype complete. See also <Link to="/effects-pedals/posts/building-a-vactrol-vca" modifier="secondary">how to build one</Link>.</Text>}
            image={ShooshThumbnail}
            alt
        />
        <FeatureItem
            name="Bazz Fuzz Face"
            to="/effects-pedals/bazz-fuzz-face"
            link="more info"
            description="A modified clone, a silicon Fuzz Face and a Bazz Fuzz in the same box. Goes from mild grit to synthy fuzz, aggressive crunch and choked-up sputter."
            image={BazzFuzzFaceThumbnail}
            alt
        />
        <FeatureItem
            name="DXLFO"
            to="/effects-pedals/dxlfo"
            link="more info"
            description="An Arduino-controlled harmonic tremolo and dual LFO with CV outputs. Original design based partially on the Twin Peaks tremolo. Prototype abandoned."
            image={DxlfoThumbnail}
            alt
        />
    </Box>;

    let mosfezEmbed = <iframe style={{border: 0, width: '100%', height: '373px'}} src="https://bandcamp.com/EmbeddedPlayer/album=1375457729/size=large/bgcol=ffffff/linkcol=0f91ff/artwork=small/transparent=true/" seamless>
        <a href="http://mosfez.bandcamp.com/album/biomes-work-in-progress">Biomes (work in progress) by mosfez</a>
    </iframe>;

    let secheronPeakEmbed = <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/14070031&color=%23ff0048&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />;

    let music = <Box modifier="paddingBottomTera">
        <Anchor name="Music" />
        <Text element="h2" modifier="sizeKilo marginKilo">Music</Text>
        <FeatureItem
            name="Mosfez"
            href="https://instagram.com/mosfez"
            link="instagram"
            bandcamp="http://mosfez.bandcamp.com/"
            description={<Box>
                <Text element="p" modifier="margin">Mosfez is where I post new musical ideas and effects pedal updates.</Text>
                <Text element="p" modifier="margin">Here are some preview clips from an upcoming album of songs for a game that doesn't exist, if that game were less of a game and more of an album.</Text>
                {mosfezEmbed}
            </Box>}
            alt
        />
        <FeatureItem
            name="Secheron Peak"
            href="http://secheronpeak.bandcamp.com/"
            link="bandcamp"
            description={<Box>
                <Text element="p" modifier="margin">Secheron Peak is an older music project. It's kind of something like dark electronic with some pretty strong post-rock tendencies.</Text>
                {secheronPeakEmbed}
            </Box>}
            alt
        />
    </Box>;

    let arduinoLibraries = <Box modifier="paddingBottomTera">
        <Anchor name="Arduino libraries" />
        <Text element="h2" modifier="sizeKilo marginKilo">Arduino libraries</Text>
        <FeatureItem
            name="ResponsiveAnalogRead"
            href="https://github.com/dxinteractive/ResponsiveAnalogRead"
            github="dxinteractive/ResponsiveAnalogRead"
            description={<Box>
                <Text element="p" modifier="margin">Arduino library for eliminating noise in analogRead inputs without decreasing responsiveness.</Text>
                <Text element="p" modifier="emphasis primary">Version 2 is almost ready!</Text>
            </Box>}
            image={ResponsiveAnalogReadThumbnail}
            alt
        />
        <FeatureItem
            name="AnalogMultiButton"
            href="https://github.com/dxinteractive/AnalogMultiButton"
            github="dxinteractive/AnalogMultiButton"
            description="Arduino library to capture multiple button presses through a single analog pin, as well as onPress and onRelease events and button press times."
            image={AnalogMultiButtonThumbnail}
            alt
        />
        <FeatureItem
            name="ArduinoTapTempo"
            href="https://github.com/dxinteractive/ArduinoTapTempo"
            github="dxinteractive/ArduinoTapTempo"
            description="An Arduino library that times consecutive button presses to calculate tempo / BPM. Corrects for missed beats and can reset phase with single taps. "
            image={ArduinoTapTempoThumbnail}
            alt
        />
    </Box>;

    let animation = <Box modifier="paddingBottomTera">
        <Anchor name="Animation" />
        <Text element="h2" modifier="sizeKilo marginKilo">Animation</Text>
        <FeatureStrip
            name="Loopdeloop submissions"
            description={<Text>Loops for <HtmlLink modifier="secondary" href="http://www.loopdeloop.org/">loopdeloop.org</HtmlLink>. <Link modifier="secondary" to="/animation/loopdeloop">See more.</Link></Text>}
            images={[
                {
                    image: "https://i.vimeocdn.com/video/716159216.jpg",
                    link: "https://vimeo.com/282191207",
                    description: "dog (0:37)"
                },
                {
                    image: "https://i.vimeocdn.com/video/334164917.jpg",
                    link: "https://vimeo.com/48289893",
                    description: "mad (0:38)"
                },
                {
                    image: "https://i.vimeocdn.com/video/569652187.jpg",
                    link: "https://vimeo.com/165720790",
                    description: "dance (0:18)"
                },
                {
                    image: FunThumbnail,
                    description: "more",
                    to: "/animation/loopdeloop"
                }
            ]}
        />
        <FeatureStrip
            name="Shorts and infographics"
            images={[
                {
                    image: "https://i.vimeocdn.com/video/201855591.jpg",
                    link: "https://vimeo.com/28944522",
                    description: "small plastic figurine (2:10)"
                },
                {
                    image: "https://i.vimeocdn.com/video/199220069.jpg",
                    link: "https://vimeo.com/29716833",
                    description: "some sleepy guy (1:00)"
                },
                {
                    image: HowToAssembleLegoRobotThumbnail,
                    link: "https://www.youtube.com/watch?v=Ojrx-BK22wg",
                    description: "how to assemble lego robot (1:39)"
                },
                {
                    image: SkateTricksThumbnail,
                    to: "/animation/skate-tricks",
                    description: "skate tricks infographics"
                }
            ]}
        />
        <FeatureStrip
            name="12gon"
            description={<Text>Hypnotic animated geometry. <HtmlLink modifier="secondary" href="http://12gon.tumblr.com">See more.</HtmlLink></Text>}
            href="https://12gon.tumblr.com"
            link="12gon.tumblr.com"
            images={[
                {
                    image: "https://66.media.tumblr.com/d76ccce59cc8c5b1e38328e33ea9a0b0/tumblr_n20913WJ4w1r2xv8po1_500.gif",
                    link: "http://12gon.tumblr.com/post/78733618405/m%C3%B6bius-6hedrons-3d"
                },
                {
                    image: "https://66.media.tumblr.com/a4514711dd133f89f612ca463a13d147/tumblr_n59d51P8lV1r2xv8po1_500.gif",
                    link: "http://12gon.tumblr.com/post/85119873523/shatter-3gons"
                },
                {
                    image: "https://66.media.tumblr.com/9b2da91be7dc6a5565a1183342cf68b4/tumblr_n5m9osWqzV1r2xv8po1_r1_500.gif",
                    link: "http://12gon.tumblr.com/post/85814750618/fragment-20hedrons"
                },
                {
                    image: "https://66.media.tumblr.com/b157baeb534ea7efc053455306c1fa57/tumblr_n1sid9LI9e1r2xv8po1_500.gif",
                    link: "http://12gon.tumblr.com/post/78416765824/breathe-4gons-3d"
                }
            ]}
        />
    </Box>;

    let flashGames = <Box modifier="paddingBottomTera">
        <Anchor name="Old Flash Games" />
        <Text element="h2" modifier="sizeKilo marginKilo">Old Flash games that probably don't work anymore</Text>
        <FeatureItem
            name="Bloxorz"
            href="https://www.coolmathgames.com/0-bloxorz"
            link="coolmathgames.com"
            description={<Box>
                <Text element="p" modifier="margin">Bloxorz is a brain twisting puzzle game of rolling blocks and switching bridges. You'll be rolling round in circles over the course of the 33 levels.</Text>
                <Text element="p">This was the first video game to use this gameplay concept and was one of the top Flash games of 2007, reaching over 1/4 billion confirmed plays.</Text>
            </Box>}
            image={BloxorzThumbnail}
            alt
        />
        <FeatureItem
            name="Silversphere"
            href="https://www.miniclip.com/games/silversphere/en/"
            link="miniclip.com"
            description={<Box>
                <Text element="p" modifier="margin">This is a puzzle game with a simple objective - get the silver sphere into the vortex in each level. However, you must make it through some fiendishly puzzling situations to get there. Finishing the game is not as easy as it may seem.</Text>
                <Text element="p">Winner of the Miniclip Flash Game competition 2005.</Text>
            </Box>}
            image={SilversphereThumbnail}
            alt
        />
        <FeatureItem
            name="Electricman 2"
            href="https://www.newgrounds.com/portal/view/363447"
            link="newgrounds.com"
            description={<Box>
                <Text element="p" modifier="margin">Electricman is back, and is now entering one of the fiercest fist-fighting competitions in the stick man universe.</Text>
            </Box>}
            image={Electricman2Thumbnail}
            alt
        />
        <Box modifier="paddingTopKilo">
            <Text element="p" modifier="monospace">Other more-stupid and / or less-good games include <HtmlLink href="https://www.albinoblacksheep.com/games/mindlessviolence">More Mindless Violence</HtmlLink>, <HtmlLink href="https://www.albinoblacksheep.com/games/broken-arms">Perfect Future Under Attack: Broken Arms</HtmlLink>, <HtmlLink href="https://www.albinoblacksheep.com/games/jetspeed">Jetspeed</HtmlLink> and <HtmlLink href="https://www.albinoblacksheep.com/games/missilegame3d">Missile Game 3D</HtmlLink>.</Text>
        </Box>
    </Box>;

    return <Layout>
        <DocsHeader
            height="heightThird"
            title={() => <Text element="h1" modifier="sizeTera superDuper margin">damienclarke.me</Text>}
            description={() => <Text>Software engineer + musician + effects pedal builder + animator living in Hobart, Australia. Part of <a className="Link Link-secondary" href="https://github.com/92green">92green</a>.</Text>}
            links={() => <Text><a className="Link Link-secondary" href="https://github.com/dxinteractive">github</a> | <a className="Link Link-secondary" href="mailto:dxinteractive@gmail.com">dxinteractive@gmail.com</a></Text>}
        />
        <ContentNav
            modifier="inverted"
            content={() => <>
                {javascriptLibraries}
                {effectsPedals}
                {music}
                {arduinoLibraries}
                {animation}
                {flashGames}
            </>}
            pageNav={[
                '# Javascript libraries',
                'mobx-fog-of-war',
                'unmutable',
                'react-floatybox',
                'react-micromount',
                '# Effects pedals',
                'Blend2',
                'Shoosh',
                'Bazz Fuzz Face',
                'DXLFO',
                '# Music',
                'Mosfez',
                'Secheron Peak',
                '# Arduino libraries',
                'ResponsiveAnalogRead',
                'AnalogMultiButton',
                'ArduinoTapTempo',
                '# Animation',
                'Loopdeloop submissions',
                'Shorts and infographics',
                '12gon',
                '# Old Flash Games',
                'Bloxorz',
                'Silversphere',
                'Electricman 2'
            ]}
        />
    </Layout>;
};
