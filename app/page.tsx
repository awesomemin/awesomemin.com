import LightRays from '@/components/LightRays';

export default function Home() {
  return (
    <div className="flex flex-col px-4">
      <div className="w-full h-dvh border-b border-b-muted relative">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          pulsating={false}
          fadeDistance={1}
          saturation={0.8}
          followMouse
          mouseInfluence={0.1}
          noiseAmount={0.05}
          distortion={0}
        />
        <div className="w-full items-center flex flex-col gap-4 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="text-4xl sm:text-8xl font-black text-center bg-linear-to-t from-zinc-600 to-white bg-clip-text text-transparent">
            Awesomemin
          </h1>
          <p className="text-lg sm:text-2xl max-w-5xl">
            <span className="font-bold">
              안녕하세요, 개발자 겸 예비창업가 오성민입니다.
            </span>{' '}
            분야와 기술 스택을 막론하고 재밌어 보이는 것은 무엇이든 공부하고
            만들어보고 있습니다. 강한 실행력과 어려운 문제를 물고 늘어지는
            성향이 강점입니다.
          </p>
        </div>
      </div>
      <div className="h-40">여기는 하단 영역이에용</div>
    </div>
  );
}
