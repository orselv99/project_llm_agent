import react from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const root = createRoot(document.body);
root.render(
  <div className='flex flex-col w-full h-full overflow-hidden'>
    <div className='relative flex h-full w-full flex-row overflow-hidden'>
      {/* side */}
      <div className='min-w-[250px] h-full'>
        <nav className='w-full h-full flex flex-col'>
          {/* side-up-menu */}
          <div className='min-h-[60px] p-3 flex items-center justify-between'>
            {/* collapse */}
            <div className='w-8 h-8 flex items-center justify-center rounded-full bg-red-800'>
              c
            </div>
            <div className='flex gap-2'>
              {/* search */}
              <div className='w-8 h-8 flex items-center justify-center rounded-full bg-red-800'>
                s
              </div>
              {/* calander */}
              <div className='w-8 h-8 flex items-center justify-center rounded-full bg-red-800'>
                s
              </div>
              {/* new */}
              <div className='w-8 h-8 flex items-center justify-center rounded-full bg-red-800'>
                n
              </div>
            </div>
          </div>
          {/* chat-list */}
          <div className='max-h-full flex flex-col px-4 pt-1 pb-4 gap-4 bg-blue-500 overflow-y-auto'>
            {/* today */}
            <div className='flex flex-col'>
              {/* todo: collapse, summary for a day */}
              <div className='p-2 flex justify-between items-center'>
                <div>today</div>
                <div>...</div>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
              </div>
            </div>
            {/* yesterday */}
            <div className='flex flex-col'>
              {/* todo: collapse, summary for a day */}
              <div className='p-2 flex justify-between items-center'>
                <div>yesterday</div>
                <div>...</div>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
              </div>
            </div>
            {/* yesterday */}
            <div className='flex flex-col'>
              {/* todo: collapse, summary for a day */}
              <div className='p-2 flex justify-between items-center'>
                <div>yesterday</div>
                <div>...</div>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
              </div>
            </div>
            {/* yesterday */}
            <div className='flex flex-col'>
              {/* todo: collapse, summary for a day */}
              <div className='p-2 flex justify-between items-center'>
                <div>yesterday</div>
                <div>...</div>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
              </div>
            </div>
            {/* yesterday */}
            <div className='flex flex-col'>
              {/* todo: collapse, summary for a day */}
              <div className='p-2 flex justify-between items-center'>
                <div>yesterday</div>
                <div>...</div>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
              </div>
            </div>
            {/* yesterday */}
            <div className='flex flex-col'>
              {/* todo: collapse, summary for a day */}
              <div className='p-2 flex justify-between items-center'>
                <div>yesterday</div>
                <div>...</div>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
                <div className='p-2 rounded-xl bg-blue-800'>item 0</div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* main */}
      <div className='w-full h-full'>
        <div className='w-full h-full flex flex-col'>
          {/* main-gnb */}
          <div className='min-h-[60px] flex items-center justify-center'>
            <div className='w-8 h-8 flex items-center justify-center rounded-full bg-red-800'>o</div>
            <div className='w-8 h-8 flex items-center justify-center rounded-full bg-red-800'>+</div>
          </div>
          {/* workspace */}
          <div className='w-full h-full'>
            <div className='w-full h-full max-h-full flex flex-col justify-center items-center'>
              {/* chat */}
              <div className=' flex overflow-y-auto'>
                <div className='w-[700px] max-h-full flex flex-col gap-8 p-2 bg-green-500'>
                  {/* me */}
                  <div className='w-full flex justify-end'>
                    <article className='flex  w-1/2 p-2 bg-green-800 rounded-xl'>
                      <div>
                        {`
                        electron + react + typescript 구성인데,

                        사용자가 자신의 open ai api key 를 
                        main 영역
                        - 입력x > register
                        - 입력o > api 이용할 수 있는 챗 영역

                        menu 영역
                        - chat list

                        오프라인을 지원하기 때문에 local 에 저장을 해야하는데

                        필요한 라이브러리와 간단한 예제 코드
                        `}

                      </div>
                    </article>
                  </div>
                  {/* ai */}
                  <div className='w-full flex justify-center'>
                    <article className='flex   p-2 bg-green-800 rounded-xl'>
                      <div>
                        {`
                        Electron + React + TypeScript 환경에서 OpenAI API Key를 로컬에 저장하고 관리하려면, electron-store를 사용하면 간단하게 해결할 수 있습니다.

                        필요한 라이브러리
                        sh
                        복사
                        편집
                        npm install electron-store
                        npm install @types/electron-store --save-dev
                        구성 개요
                        Main Process (Electron)

                        electron-store를 이용해 API Key를 저장/읽기
                        ipcMain을 사용하여 Renderer에서 요청을 받아 처리
                        Renderer (React)

                        API Key 입력 여부에 따라 UI를 분기
                        ipcRenderer를 통해 Main Process와 통신
                        `}

                      </div>
                    </article>
                  </div>
                  {/* me */}
                  <div className='w-full flex justify-end'>
                    <article className='flex  w-1/2 p-2 bg-green-800 rounded-xl'>
                      <div>
                        {`
                        electron + react + typescript 구성인데,

                        사용자가 자신의 open ai api key 를 
                        main 영역
                        - 입력x > register
                        - 입력o > api 이용할 수 있는 챗 영역

                        menu 영역
                        - chat list

                        오프라인을 지원하기 때문에 local 에 저장을 해야하는데

                        필요한 라이브러리와 간단한 예제 코드
                        `}

                      </div>
                    </article>
                  </div>
                  {/* ai */}
                  <div className='w-full flex justify-center'>
                    <article className='flex   p-2 bg-green-800 rounded-xl'>
                      <div>
                        {`
                        Electron + React + TypeScript 환경에서 OpenAI API Key를 로컬에 저장하고 관리하려면, electron-store를 사용하면 간단하게 해결할 수 있습니다.

                        필요한 라이브러리
                        sh
                        복사
                        편집
                        npm install electron-store
                        npm install @types/electron-store --save-dev
                        구성 개요
                        Main Process (Electron)

                        electron-store를 이용해 API Key를 저장/읽기
                        ipcMain을 사용하여 Renderer에서 요청을 받아 처리
                        Renderer (React)

                        API Key 입력 여부에 따라 UI를 분기
                        ipcRenderer를 통해 Main Process와 통신
                        `}

                      </div>
                    </article>
                  </div>
                  {/* me */}
                  <div className='w-full flex justify-end'>
                    <article className='flex  w-1/2 p-2 bg-green-800 rounded-xl'>
                      <div>
                        {`
                        electron + react + typescript 구성인데,

                        사용자가 자신의 open ai api key 를 
                        main 영역
                        - 입력x > register
                        - 입력o > api 이용할 수 있는 챗 영역

                        menu 영역
                        - chat list

                        오프라인을 지원하기 때문에 local 에 저장을 해야하는데

                        필요한 라이브러리와 간단한 예제 코드
                        `}

                      </div>
                    </article>
                  </div>
                  {/* ai */}
                  <div className='w-full flex justify-center'>
                    <article className='flex   p-2 bg-green-800 rounded-xl'>
                      <div>
                        {`
                        Electron + React + TypeScript 환경에서 OpenAI API Key를 로컬에 저장하고 관리하려면, electron-store를 사용하면 간단하게 해결할 수 있습니다.

                        필요한 라이브러리
                        sh
                        복사
                        편집
                        npm install electron-store
                        npm install @types/electron-store --save-dev
                        구성 개요
                        Main Process (Electron)

                        electron-store를 이용해 API Key를 저장/읽기
                        ipcMain을 사용하여 Renderer에서 요청을 받아 처리
                        Renderer (React)

                        API Key 입력 여부에 따라 UI를 분기
                        ipcRenderer를 통해 Main Process와 통신
                        `}

                      </div>
                    </article>
                  </div>
                  {/* me */}
                  <div className='w-full flex justify-end'>
                    <article className='flex  w-1/2 p-2 bg-green-800 rounded-xl'>
                      <div>
                        {`
                        electron + react + typescript 구성인데,

                        사용자가 자신의 open ai api key 를 
                        main 영역
                        - 입력x > register
                        - 입력o > api 이용할 수 있는 챗 영역

                        menu 영역
                        - chat list

                        오프라인을 지원하기 때문에 local 에 저장을 해야하는데

                        필요한 라이브러리와 간단한 예제 코드
                        `}

                      </div>
                    </article>
                  </div>
                  {/* ai */}
                  <div className='w-full flex justify-center'>
                    <article className='flex   p-2 bg-green-800 rounded-xl'>
                      <div>
                        {`
                        Electron + React + TypeScript 환경에서 OpenAI API Key를 로컬에 저장하고 관리하려면, electron-store를 사용하면 간단하게 해결할 수 있습니다.

                        필요한 라이브러리
                        sh
                        복사
                        편집
                        npm install electron-store
                        npm install @types/electron-store --save-dev
                        구성 개요
                        Main Process (Electron)

                        electron-store를 이용해 API Key를 저장/읽기
                        ipcMain을 사용하여 Renderer에서 요청을 받아 처리
                        Renderer (React)

                        API Key 입력 여부에 따라 UI를 분기
                        ipcRenderer를 통해 Main Process와 통신
                        `}

                      </div>
                    </article>
                  </div>
                  {/* me */}
                  <div className='w-full flex justify-end'>
                    <article className='flex  w-1/2 p-2 bg-green-800 rounded-xl'>
                      <div>
                        {`
                        electron + react + typescript 구성인데,

                        사용자가 자신의 open ai api key 를 
                        main 영역
                        - 입력x > register
                        - 입력o > api 이용할 수 있는 챗 영역

                        menu 영역
                        - chat list

                        오프라인을 지원하기 때문에 local 에 저장을 해야하는데

                        필요한 라이브러리와 간단한 예제 코드
                        `}

                      </div>
                    </article>
                  </div>
                  {/* ai */}
                  <div className='w-full flex justify-center'>
                    <article className='flex   p-2 bg-green-800 rounded-xl'>
                      <div>
                        {`
                        Electron + React + TypeScript 환경에서 OpenAI API Key를 로컬에 저장하고 관리하려면, electron-store를 사용하면 간단하게 해결할 수 있습니다.

                        필요한 라이브러리
                        sh
                        복사
                        편집
                        npm install electron-store
                        npm install @types/electron-store --save-dev
                        구성 개요
                        Main Process (Electron)

                        electron-store를 이용해 API Key를 저장/읽기
                        ipcMain을 사용하여 Renderer에서 요청을 받아 처리
                        Renderer (React)

                        API Key 입력 여부에 따라 UI를 분기
                        ipcRenderer를 통해 Main Process와 통신
                        `}

                      </div>
                    </article>
                  </div>
                </div>
                {/* summary */}
                {/* <div className='min-w-[150px] h-full max-h-full gap-2 p-2 bg-orange-500'>
                  <div>asdf</div>
                  <div>asdf</div>
                  <div>asdf</div>
                  <div>asdf</div>
                  <div>asdf</div>
                  <div>asdf</div>
                  <div>asdf</div>
                  <div>asdf</div>
                </div> */}
              </div>
              {/* chat-input */}
              <div className='w-full flex '>
                <div className='w-[700px] h-[150px] bg-slate-500'>
                input
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);