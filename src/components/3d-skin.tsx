'use client'

import { useEffect, useRef } from 'react'
import {
    AmbientLight,
    BoxGeometry,
    DirectionalLight,
    Group,
    Material,
    Mesh,
    MeshLambertMaterial,
    NearestFilter,
    PerspectiveCamera,
    Scene,
    SRGBColorSpace,
    TextureLoader,
    WebGLRenderer,
} from 'three'

interface MinecraftSkinThreeProps {
    skin: string
}
export function Skin3D({ skin }: MinecraftSkinThreeProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return
        const current = containerRef.current

        // escena
        const scene = new Scene()

        // cámara

        const width = 400
        const height = 600
        const camera = new PerspectiveCamera(45, width / height, 0.1, 100)
        camera.position.set(0, 1.6, 6)

        // renderer
        const renderer = new WebGLRenderer({
            alpha: true,
            antialias: true,
        })
        renderer.outputColorSpace = SRGBColorSpace
        renderer.setSize(width, height)
        current.appendChild(renderer.domElement)

        // luz
        scene.add(new AmbientLight(0xffffff, 0.6))
        const light = new DirectionalLight(0xffffff, 0.8)
        light.position.set(3, 5, 2)
        scene.add(light)

        // textura skin
        const texture = new TextureLoader().load(skin)
        texture.magFilter = NearestFilter
        texture.minFilter = NearestFilter
        texture.colorSpace = SRGBColorSpace

        const material = new MeshLambertMaterial({
            map: texture,
            transparent: true,
            alphaTest: 0.5,
        })

        const group = new Group()
        const head = createHead(material)
        head.position.y = 1.7
        group.add(head)
        const body = createBody(material)
        body.position.y = 0.45
        group.add(body)
        const rightArm = createRightArm(material)
        rightArm.position.y = 1.15
        rightArm.position.x = -0.75
        group.add(rightArm)
        const leftArm = createLeftArm(material)
        leftArm.position.y = 1.15
        leftArm.position.x = 0.75
        group.add(leftArm)
        const leftleg = createLeftLeg(material)
        leftleg.position.y = -0.35
        leftleg.position.x = 0.25
        group.add(leftleg)
        const rightLeg = createRightLeg(material)
        rightLeg.position.y = -0.35
        rightLeg.position.x = -0.25
        group.add(rightLeg)
        group.position.y = 1.5
        scene.add(group)

        // animación
        let frameId: number
        const fps = 30
        let last = 0
        const speed = 4
        const maxAngle = 0.6

        let isDragging = false
        let prevX = 0
        let prevY = 0

        let yaw = 0 // rotación Y (izq / der)
        let pitch = 0 // rotación X (arriba / abajo)

        function animate(time: number) {
            frameId = requestAnimationFrame(animate)

            if (time - last < 1000 / fps) return
            last = time

            yaw -= 0.005
            group.rotation.y = yaw
            const t = time / 1000
            leftArm.rotation.x = Math.sin(t * speed) * maxAngle
            rightArm.rotation.x = -(Math.sin(t * speed) * maxAngle)
            leftleg.rotation.x = -(Math.sin(t * speed) * maxAngle)
            rightLeg.rotation.x = Math.sin(t * speed) * maxAngle

            renderer.render(scene, camera)
        }
        animate(0)

        renderer.domElement.addEventListener('mousedown', e => {
            isDragging = true
            prevX = e.clientX
            prevY = e.clientY
        })

        renderer.domElement.addEventListener('mousemove', e => {
            if (!isDragging) return

            const dx = e.clientX - prevX
            const dy = e.clientY - prevY

            prevX = e.clientX
            prevY = e.clientY

            const sensitivity = 0.005

            yaw += dx * sensitivity
            pitch += dy * sensitivity

            const limit = Math.PI / 3
            pitch = Math.max(-limit, Math.min(limit, pitch))

            group.rotation.y = yaw
            group.rotation.x = pitch
        })

        window.addEventListener('mouseup', () => {
            isDragging = false
        })

        // cleanup
        return () => {
            cancelAnimationFrame(frameId)
            renderer.dispose()
            current?.removeChild(renderer.domElement)
        }
    }, [containerRef, skin])

    return <div className='h-screen' ref={containerRef} />
}

function setFaceUV(
    geo: BoxGeometry,
    face: number,
    x: number,
    y: number,
    w: number,
    h: number,
    {
        flipX = false,
        rotate180 = false,
    }: {
        flipX?: boolean
        rotate180?: boolean
    } = {},
) {
    const uvs = geo.attributes.uv
    const size = 64

    const u0 = x / size
    const v0 = 1 - (y + h) / size
    const u1 = (x + w) / size
    const v1 = 1 - y / size

    const i = face * 4

    let coords: [number, number][] = [
        [u1, v1],
        [u0, v1],
        [u1, v0],
        [u0, v0],
    ]

    if (flipX) {
        coords = [
            [u0, v1],
            [u1, v1],
            [u0, v0],
            [u1, v0],
        ]
    }

    if (rotate180) {
        coords = [coords[2], coords[3], coords[0], coords[1]]
    }

    coords.forEach(([u, v], idx) => {
        uvs.setXY(i + idx, u, v)
    })
}

function createHead(material: Material) {
    const headGroup = new Group()

    // cabeza
    const headGeo = new BoxGeometry(1, 1, 1)

    // UVs Minecraft (skin 64x64)
    setFaceUV(headGeo, 1, 0, 8, 8, 8, { flipX: true }) // left
    setFaceUV(headGeo, 4, 8, 8, 8, 8, { flipX: true }) // front
    setFaceUV(headGeo, 0, 16, 8, 8, 8, { flipX: true }) // right
    setFaceUV(headGeo, 5, 24, 8, 8, 8, { flipX: true }) // back
    setFaceUV(headGeo, 2, 8, 0, 8, 8, { flipX: true }) // top
    setFaceUV(headGeo, 3, 16, 0, 8, 8, { rotate180: true }) // bottom

    const head = new Mesh(headGeo, material)
    headGroup.add(head)

    // hat
    const hatGeo = new BoxGeometry(1.1, 1.1, 1.1)

    // UVs Minecraft (skin 64x64)
    setFaceUV(hatGeo, 1, 32, 8, 8, 8, { flipX: true }) // left
    setFaceUV(hatGeo, 4, 40, 8, 8, 8, { flipX: true }) // front
    setFaceUV(hatGeo, 0, 48, 8, 8, 8, { flipX: true }) // right
    setFaceUV(hatGeo, 5, 56, 8, 8, 8, { flipX: true }) // back
    setFaceUV(hatGeo, 2, 40, 0, 8, 8, { flipX: true }) // top
    setFaceUV(hatGeo, 3, 48, 0, 8, 8, { rotate180: true }) // bottom

    const hat = new Mesh(hatGeo, material)
    headGroup.add(hat)
    return headGroup
}

function createBody(material: Material) {
    const group = new Group()

    // cabeza
    const bodyGeo = new BoxGeometry(1, 1.5, 0.5)

    // UVs Minecraft (skin 64x64)
    setFaceUV(bodyGeo, 4, 20, 20, 8, 12, { flipX: true }) // front
    setFaceUV(bodyGeo, 5, 32, 20, 8, 12, { flipX: true }) // back
    setFaceUV(bodyGeo, 0, 28, 20, 4, 12, { flipX: true }) // right
    setFaceUV(bodyGeo, 1, 16, 20, 4, 12, { flipX: true }) // left
    setFaceUV(bodyGeo, 2, 20, 16, 8, 4, { flipX: true }) // top
    setFaceUV(bodyGeo, 3, 28, 16, 8, 4, { rotate180: true, flipX: true }) // bottom

    const body = new Mesh(bodyGeo, material)
    group.add(body)

    // hat
    const jacketGeo = new BoxGeometry(1.1, 1.6, 0.6)

    // UVs Minecraft (skin 64x64)
    setFaceUV(jacketGeo, 4, 20, 36, 8, 12) // front
    setFaceUV(jacketGeo, 5, 32, 36, 8, 12, { flipX: true }) // back
    setFaceUV(jacketGeo, 0, 28, 36, 4, 12) // right
    setFaceUV(jacketGeo, 1, 16, 36, 4, 12, { flipX: true }) // left
    setFaceUV(jacketGeo, 2, 20, 32, 8, 4) // top
    setFaceUV(jacketGeo, 3, 28, 32, 8, 4, { rotate180: true }) // bottom

    const jacket = new Mesh(jacketGeo, material)
    // group.add(jacket)
    return group
}

function createRightArm(material: Material) {
    const armGeo = new BoxGeometry(0.5, 1.5, 0.5)

    setFaceUV(armGeo, 1, 40, 20, 4, 12, { flipX: true }) // left
    setFaceUV(armGeo, 4, 44, 20, 4, 12, { flipX: true }) // front
    setFaceUV(armGeo, 0, 48, 20, 4, 12, { flipX: true }) // right
    setFaceUV(armGeo, 5, 52, 20, 4, 12, { flipX: true }) // back
    setFaceUV(armGeo, 2, 44, 16, 4, 4, { flipX: true }) // top
    setFaceUV(armGeo, 3, 48, 16, 4, 4, { flipX: true, rotate180: true }) // bottom

    const armOverlayGeo = new BoxGeometry(0.6, 1.6, 0.6)

    setFaceUV(armOverlayGeo, 4, 44, 36, 4, 12) // front
    setFaceUV(armOverlayGeo, 5, 52, 36, 4, 12, { flipX: true }) // back
    setFaceUV(armOverlayGeo, 0, 48, 36, 4, 12) // right
    setFaceUV(armOverlayGeo, 1, 40, 36, 4, 12, { flipX: true }) // left
    setFaceUV(armOverlayGeo, 2, 44, 32, 4, 4) // top
    setFaceUV(armOverlayGeo, 3, 48, 32, 4, 4, { rotate180: true }) // bottom

    const position = -0.7
    const arm = new Mesh(armGeo, material)
    arm.position.y = position
    const sleeve = new Mesh(armOverlayGeo, material)
    sleeve.position.y = position

    const group = new Group()

    group.add(arm)
    // group.add(sleeve)

    return group
}

function createLeftArm(material: Material) {
    const armGeo = new BoxGeometry(0.5, 1.5, 0.5)

    setFaceUV(armGeo, 1, 32, 52, 4, 12, { flipX: true }) // left
    setFaceUV(armGeo, 4, 36, 52, 4, 12, { flipX: true }) // front
    setFaceUV(armGeo, 0, 40, 52, 4, 12, { flipX: true }) // right
    setFaceUV(armGeo, 5, 44, 52, 4, 12, { flipX: true }) // back
    setFaceUV(armGeo, 2, 36, 48, 4, 4, { flipX: true }) // top
    setFaceUV(armGeo, 3, 40, 48, 4, 4, { flipX: true, rotate180: true }) // bottom

    const armOverlayGeo = new BoxGeometry(0.6, 1.6, 0.6)

    setFaceUV(armOverlayGeo, 4, 52, 52, 4, 12) // front
    setFaceUV(armOverlayGeo, 5, 60, 52, 4, 12, { flipX: true }) // back
    setFaceUV(armOverlayGeo, 0, 56, 52, 4, 12) // right
    setFaceUV(armOverlayGeo, 1, 48, 52, 4, 12, { flipX: true }) // left
    setFaceUV(armOverlayGeo, 2, 52, 48, 4, 4) // top
    setFaceUV(armOverlayGeo, 3, 56, 48, 4, 4, { rotate180: true }) // bottom

    const position = -0.7
    const arm = new Mesh(armGeo, material)
    arm.position.y = position
    const sleeve = new Mesh(armOverlayGeo, material)
    sleeve.position.y = position

    const armGroup = new Group()

    armGroup.add(arm)
    // armGroup.add(sleeve)

    return armGroup
}

function createLeftLeg(material: Material) {
    const armGeo = new BoxGeometry(0.5, 1.5, 0.5)

    setFaceUV(armGeo, 1, 16, 52, 4, 12, { flipX: true }) // left
    setFaceUV(armGeo, 4, 20, 52, 4, 12, { flipX: true }) // front
    setFaceUV(armGeo, 0, 24, 52, 4, 12, { flipX: true }) // right
    setFaceUV(armGeo, 5, 28, 52, 4, 12, { flipX: true }) // back
    setFaceUV(armGeo, 2, 20, 48, 4, 4, { flipX: true }) // top
    setFaceUV(armGeo, 3, 24, 48, 4, 4, { flipX: true }) // bottom

    const armOverlayGeo = new BoxGeometry(0.6, 1.6, 0.6)

    setFaceUV(armOverlayGeo, 1, 0, 52, 4, 12, { flipX: true }) // left
    setFaceUV(armOverlayGeo, 4, 4, 52, 4, 12, { flipX: true }) // front
    setFaceUV(armOverlayGeo, 0, 8, 52, 4, 12, { flipX: true }) // right
    setFaceUV(armOverlayGeo, 5, 12, 52, 4, 12, { flipX: true }) // back
    setFaceUV(armOverlayGeo, 2, 4, 48, 4, 4, { flipX: true }) // top
    setFaceUV(armOverlayGeo, 3, 8, 48, 4, 4, { flipX: true }) // bottom

    const position = -0.7
    const arm = new Mesh(armGeo, material)
    arm.position.y = position
    const sleeve = new Mesh(armOverlayGeo, material)
    sleeve.position.y = position

    const armGroup = new Group()

    armGroup.add(arm)
    // armGroup.add(sleeve)

    return armGroup
}

function createRightLeg(material: Material) {
    const armGeo = new BoxGeometry(0.5, 1.5, 0.5)

    setFaceUV(armGeo, 1, 0, 20, 4, 12, { flipX: true }) // left
    setFaceUV(armGeo, 4, 4, 20, 4, 12, { flipX: true }) // front
    setFaceUV(armGeo, 0, 8, 20, 4, 12, { flipX: true }) // right
    setFaceUV(armGeo, 5, 12, 20, 4, 12, { flipX: true }) // back
    setFaceUV(armGeo, 2, 4, 16, 4, 4, { flipX: true }) // top
    setFaceUV(armGeo, 3, 8, 16, 4, 4, { flipX: true }) // bottom

    const armOverlayGeo = new BoxGeometry(0.6, 1.6, 0.6)

    setFaceUV(armOverlayGeo, 1, 0, 52, 4, 12, { flipX: true }) // left
    setFaceUV(armOverlayGeo, 4, 4, 52, 4, 12, { flipX: true }) // front
    setFaceUV(armOverlayGeo, 0, 8, 52, 4, 12, { flipX: true }) // right
    setFaceUV(armOverlayGeo, 5, 12, 52, 4, 12, { flipX: true }) // back
    setFaceUV(armOverlayGeo, 2, 4, 48, 4, 4, { flipX: true }) // top
    setFaceUV(armOverlayGeo, 3, 8, 48, 4, 4, { flipX: true }) // bottom

    const position = -0.7
    const arm = new Mesh(armGeo, material)
    arm.position.y = position
    const sleeve = new Mesh(armOverlayGeo, material)
    sleeve.position.y = position

    const armGroup = new Group()

    armGroup.add(arm)
    // armGroup.add(sleeve)

    return armGroup
}
