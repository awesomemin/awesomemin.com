import Image from 'next/image';
import SKKU from '@/public/SKKU.jpg';
import Army from '@/public/Army.png';
import SKKRYPTO from '@/public/SKKRYPTO.png';
import Holdem from '@/public/Holdem.png';
import Link from 'next/link';

export default function Profile() {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-30">
      <h1 className="text-2xl font-bold">프로필</h1>
      <div className="flex flex-col gap-8 mt-8">
        <div>
          <h2 className="text-xl font-bold">프로젝트</h2>
          <ul className="p-4">
            <li className="flex">
              <div className="w-12 h-12 rounded-lg mr-4">
                <Image
                  src={Holdem}
                  alt="성균홀덤대회 symbol"
                  className="rounded-lg"
                />
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <span className="font-bold">성균홀덤대회</span>
                  <span className="text-muted-foreground">
                    2025.03 - 2025.11
                  </span>
                </div>
                <ul className="list-disc list-inside pl-4">
                  <li>교내에서 오프라인 포커(홀덤) 게임 대회를 1년 간 운영</li>
                  <li>누적 회원 약 50명, 매출액 600,000원을 달성</li>
                  <li>
                    게임 예약 및 결과 관리를 위한 웹 서비스 개발 (React +
                    Nest.js)
                  </li>
                  <li>
                    혼자서 기획, 개발, 마케팅, 운영을 모두 맡아 실제 매출까지
                    발생시키는 과정을 통해 작지만{' '}
                    <b>비즈니스의 전체 과정을 직접 경험</b>
                  </li>
                  <li>
                    <Link
                      href="https://skku.univholdem.com"
                      className="underline"
                    >
                      서비스 바로가기
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">학력</h2>
          <ul className="p-4">
            {/* 성균관대학교 */}
            <li className="flex">
              <div className="w-12 h-12 rounded-lg mr-4">
                <Image src={SKKU} alt="SKKU symbol" className="rounded-lg" />
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <span className="font-bold">성균관대학교</span>
                  <span className="text-muted-foreground">
                    2021.02 - 2028.02(예정)
                  </span>
                </div>
                <ul className="list-disc list-inside pl-4">
                  <li>GPA: 4.29/4.5</li>
                  <li>제1전공: 시스템경영공학과/산업공학과 (4.17/4.5)</li>
                  <li>제2전공: 소프트웨어학과 (4.5/4.5)</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">경력</h2>
          <ul className="p-4">
            {/* 대한민국 육군 */}
            <li className="flex">
              <div className="w-12 h-12 rounded-lg bg-white mr-4 flex items-center justify-center">
                <Image
                  src={Army}
                  alt="Army symbol"
                  className="rounded-lg w-8"
                />
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <span className="font-bold">대한민국 육군</span>
                  <span className="text-muted-foreground">
                    2023.03 - 2024.09
                  </span>
                </div>
                <ul className="list-disc list-inside pl-4">
                  <li>대한민국 육군 병장 만기 전역 (의무복무)</li>
                  <li>30명 규모 중대에서 인사/군수 행정병 임무 수행</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">기타 활동</h2>
          <ul className="p-4">
            {/* 스크립토 */}
            <li className="flex">
              <div className="w-12 h-12 rounded-lg bg-white mr-4 flex items-center justify-center">
                <Image
                  src={SKKRYPTO}
                  alt="SKKRYPTO symbol"
                  className="rounded-lg"
                />
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <span className="font-bold">
                    SKKRYPTO - 성균관대학교 블록체인 학회
                  </span>
                  <span className="text-muted-foreground">
                    2021.04 - 2022.02
                  </span>
                </div>
                <ul className="list-disc list-inside pl-4">
                  <li>이더리움 메인넷 기반 solidity 스마트 컨트랙트 개발</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
