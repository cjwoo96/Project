<template>
  <main>
    <body>
      <div class="container">
        <div class="video-box">
          <div>
            <p class="fw-bold text-left fs-4">최근 가장 많이 본 영상</p>
          </div>
          <div
            style="width: 100%; padding: 10px; border-radius: 8px margin-bottom: 10px; margin-top: 10px;"
            class="d-flex align-items-center shadow-sm mb-4"
          >
            <span class="material-symbols-outlined">search</span>
            <div style="flex-grow: 1; margin-left: 10px">
              <input
                :style="{
                  width: '100%',
                  border: 'none',
                  backgroundColor: 'transparent',
                  margin: '6px 2px 6px 2px',
                  padding: '2px',
                }"
                list="datalistOptions"
                placeholder="운동 제목 검색"
              />
            </div>
          </div>
          <div
            class="shadow pe-3 ps-3 pt-4 pb-4 d-flex video-list w-100 justify-content-around"
          >
            <div
              v-for="video in store.viewList"
              :key="video.videoId"
              style="margin-right: 5px; margin-left: 5px; width: 33%"
            >
              <div
                @click="gotoVideoDetail(video)"
                style="cursor: pointer; width: 100%"
              >
                <div class="text-wrap fw-bold">
                  <div class="text-center">
                    <iframe
                      width="100%"
                      height="auto"
                      :src="'https://www.youtube.com/embed/' + video.url"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div class="mt-1 mb-1 d-flex text-wrap">
                    {{ video.title }}
                  </div>
                  <div class="justify-content-between d-flex">
                    <span
                      class="p-1 rounded-pill fw-bold bg-primary w-auto text-white"
                    >
                      {{ video.fitPartName }}
                    </span>
                    <span class="fw-normal text-body-secondary">{{
                      video.channelName
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 video-box">
          <div>
            <p class="fw-bold text-left fs-4">운동 부위 선택</p>
          </div>
          <div class="d-flex" style="margin-bottom: 20px">
            <div
              v-for="part in parts"
              :key="part"
              @click="store.selectByPart(part)"
              style="cursor: pointer"
              class="fw-normal ps-3 pe-3 pt-2 pb-2 me-2 rounded-pill bg-light shadow-sm w-auto"
            >
              {{ part }}
            </div>
          </div>
          <div
            class="shadow pe-3 ps-3 pt-4 pb-4 d-flex video-list w-100 justify-content-around"
          >
            <div
              v-for="video in store.partList"
              :key="video.videoId"
              style="
                cursor: pointer;
                margin-right: 5px;
                margin-left: 5px;
                width: 33%;
              "
              @click="gotoVideoDetail(video)"
            >
              <div class="text-wrap fw-bold">
                <div class="text-center">
                  <iframe
                    width="100%"
                    height="auto"
                    :src="'https://www.youtube.com/embed/' + video.url"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div class="mt-1 mb-1 d-flex text-wrap">
                  {{ video.title }}
                </div>
                <div class="justify-content-between d-flex">
                  <span
                    class="p-1 rounded-pill fw-bold bg-primary w-auto text-white"
                  >
                    {{ video.fitPartName }}
                  </span>
                  <span class="fw-normal text-body-secondary">{{
                    video.channelName
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </main>
</template>

<script setup>
import { useVideoStore } from "@/stores/video.js";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const gotoVideoDetail = (video) => {
  const videoId = video.videoId;
  const url = video.url;
  console.log(video);
  router.push({ name: "VideoDetail", params: { id: videoId, url } });
};

const store = useVideoStore();
onMounted(() => {
  store.selectByView();
});
onMounted(() => {
  store.selectByPart("전체");
});

const parts = ["전체", "전신", "상체", "하체", "복부"];
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

a {
  text-decoration: none !important;
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 200px;
  width: 1400px;
}

.container-fluid {
  padding: 0 20px 0 20px !important;
}

#page-name {
  font-weight: bold;
  font-size: 2rem;
}

.main-image {
  width: 100%;
  height: 200px;
}

.search-box {
  width: 100%;
  padding: 10px;
}

input {
  width: 100%;
}

.video-list img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.video-box {
  width: 100%;
}
</style>
