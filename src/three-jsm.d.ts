// three-jsm.d.ts
declare module 'three/examples/jsm/postprocessing/EffectComposer' {
    import { WebGLRenderer, WebGLRenderTarget } from 'three';
    import { Pass } from 'three/examples/jsm/postprocessing/Pass';
    export class EffectComposer {
      constructor(renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget);
      renderer: WebGLRenderer;
      renderTarget1: WebGLRenderTarget;
      renderTarget2: WebGLRenderTarget;
      writeBuffer: WebGLRenderTarget;
      readBuffer: WebGLRenderTarget;
      passes: Pass[];
      addPass(pass: Pass): void;
      insertPass(pass: Pass, index: number): void;
      removePass(pass: Pass): void;
      render(deltaTime?: number): void;
      readRenderTargetPixels(renderTarget: WebGLRenderTarget, x: number, y: number, width: number, height: number, buffer: Uint8Array): void;
      setPixelRatio(pixelRatio: number): void;
      setSize(width: number, height: number): void;
      setRenderTarget(renderTarget: WebGLRenderTarget): void;
      dispose(): void;
    }
}

declare module 'three/examples/jsm/postprocessing/RenderPass' {
    import { Scene, Camera, Material, Color } from 'three';
    import { Pass } from 'three/examples/jsm/postprocessing/Pass';
    export class RenderPass extends Pass {
      constructor(scene: Scene, camera: Camera, overrideMaterial?: Material, clearColor?: Color, clearAlpha?: number);
      scene: Scene;
      camera: Camera;
      overrideMaterial: Material;
      clearColor: Color;
      clearAlpha: number;
      clear: boolean;
      needsSwap: boolean;
      // No dispose method in the public API for RenderPass
    }
}

declare module 'three/examples/jsm/postprocessing/UnrealBloomPass' {
    import { Vector2, WebGLRenderTarget } from 'three';
    import { Pass } from 'three/examples/jsm/postprocessing/Pass';
    export class UnrealBloomPass extends Pass {
      constructor(resolution: Vector2, strength: number, radius: number, threshold: number);
      resolution: Vector2;
      strength: number;
      radius: number;
      threshold: number;
      renderTargetBright: WebGLRenderTarget;
      renderTargetBlur: WebGLRenderTarget[];
      separableBlurMaterials: any[];
      compositeMaterial: any;
      copyUniforms: object;
      materialCopy: object;
      fsQuad: object;
      nMips: number;
      highPassUniforms: object;
      materialHighPassFilter: object;
      coneTwistShader: object;
      convolutionShader: object;
      diffuse: number;
      edgeStrength: number;
      edgeGlow: number;
      kernelSize: number;
      luminosityThreshold: number;
      luminositySmoothing: number;
      mixContrast: number;
      mixDesaturation: number;
      enabled: boolean;
      needsSwap: boolean;
      renderToScreen: boolean;
      clear: boolean;
      // FIX: Corrected method signatures for get and set
      get(name: string): any;
      set(name: string, value: any): void;
      dispose(): void; // UnrealBloomPass *does* have a dispose method
    }
}