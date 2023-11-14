import { ref } from "vue";
import { defineStore } from "pinia";
import router from "@/router";
import axios from "axios";

const REST_VIDEO_API = `http://localhost:8080/api-video`;

export const useVideoStore = defineStore("video", () => {
  // 동영상 전체 목록
  const videoList = ref([]);
  const select = function () {
    axios.get(`${REST_VIDEO_API}/video`).then((response) => {
      videoList.value = response.data;
    });
  };

  //동영상 하나

  const video = ref({});
  const selectVideoById = function (id) {
    axios
      .get(`${REST_VIDEO_API}/video/${id}`)
      .then((response) => {
        video.value = response.data;
        console.log(video.value);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  //운동 부위별 조회
  // videos/part/{part}
  const partList = ref([]);
  const selectByPart = function (part) {
    if (part !== "전체") {
      axios.get(`${REST_VIDEO_API}/videos/part/${part}`).then((response) => {
        partList.value = response.data;
        console.log(partList);
      });
    } else {
      axios.get(`${REST_VIDEO_API}/videos`).then((response) => {
        partList.value = response.data;
        console.log(partList);
      });
    }
  };

  //조회수 순서대로 조회
  // videos/top

  const viewList = ref([]);
  const selectByView = function (part) {
    axios.get(`${REST_VIDEO_API}/videos/top`).then((response) => {
      viewList.value = response.data;
    });
  };

  return {
    viewList,
    partList,
    video,
    videoList,
    selectByView,
    selectByPart,
    selectVideoById,
    select,
  };
});
