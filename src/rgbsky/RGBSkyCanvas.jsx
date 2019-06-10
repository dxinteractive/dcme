// @flow
import * as THREE from 'three/src/Three';
import React from 'react';
// $FlowFixMe
import {useRef} from 'react';
// $FlowFixMe
import {useMemo} from 'react';

import {Canvas} from 'react-three-fiber';
import {useRender} from 'react-three-fiber';

function Stars() {
    let group = useRef();
    let theta = 0;

    useRender(() => {
        // Some things maybe shouldn't be declarative, we're in the render-loop here with full access to the instance
        const r = 5 * Math.sin(THREE.Math.degToRad((theta += 0.1)));
        const s = Math.cos(THREE.Math.degToRad(theta * 2));
        group.current.rotation.set(r, r, r);
        group.current.scale.set(s, s, s);
    });

    const [geo, mat, vertices, coords] = useMemo(() => {
        const geo = new THREE.SphereBufferGeometry(1, 10, 10);
        const mat = new THREE.MeshBasicMaterial({
            color: new THREE.Color('lightblue')
        });
        const coords = new Array(2000).fill().map(() => [Math.random() * 800 - 400, Math.random() * 800 - 400, Math.random() * 800 - 400])
        return [geo, mat, vertices, coords];
    }, []);

    return <group ref={group}>
        {coords.map(([p1, p2, p3], i) => {
            return <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />;
        })}
    </group>;
}

export default () => <Canvas
    camera={{
        position: [0, 0, 0]
    }}
>
    <ambientLight color="lightblue" />
    <pointLight color="white" intensity={1} position={[10, 10, 10]} />
    <Stars />
</Canvas>;
