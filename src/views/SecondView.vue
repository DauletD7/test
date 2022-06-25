<template>
  <div class="second-page">
    <div class="container">
      <div class="d-flex justify-between">
        <div class="w-30">
          <div class="main-1">
            <div class="w-full bg-main">
              <div class="second-container">
                <p>
                  Входящий по номеру <br />
                  регистрации
                </p>
              </div>
            </div>
            <div class="second-container d-flex search">
              <input class="w-full" type="text" placeholder="Поиск" />
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="second-container">
              <div class="d-flex justify-between icons">
                <i class="fa-solid fa-r icon-1"></i>
                <i class="fa-solid fa-user"></i>
                <i class="fa-solid fa-arrow-up"></i>
                <i class="fa-solid fa-file-arrow-down"></i>
                <i class="fa-solid fa-user-tie"></i>
                <i class="fa-solid fa-bars"></i>
                <i class="fa-solid fa-sun icon-2"></i>
              </div>
            </div>
            <div class="second-container">
              <hr class="hr-1" />
              <div class="date">
                <p>Дата регистрации:</p>
                <div class="d-flex">
                  <input type="date" class="w-full" />
                  <i class="fa-solid fa-arrows-left-right"></i>
                  <input type="date" class="w-full" />
                </div>
              </div>
            </div>
            <div class="bg-main">
              <div class="second-container">
                <div class="d-flex">
                  <input type="radio" name="rad" id="" />
                  <p>Все</p>
                </div>
                <div class="d-flex">
                  <input type="radio" name="rad" id="" />
                  <p>Неконтрольные</p>
                </div>
                <div class="d-flex">
                  <input type="radio" name="rad" id="" />
                  <p>Снятые с контроля</p>
                </div>
                <div class="d-flex">
                  <input type="radio" name="rad" id="" />
                  <p>На контроле</p>
                </div>
              </div>
            </div>
            <div class="second-container" v-for="doc in blogs" :key="doc.id">
              <div
                @click="cur_id = doc.id"
                class="d-flex items-center justify-between mt-30 btn-hover"
              >
                <div>
                  <i class="fa-solid fa-file-circle-check text_30"></i>
                </div>
                <div>
                  Рег.номер: {{ doc.incoming }} <br />
                  {{ doc.date_of_incoming }} <br />
                  {{ doc.theme }}
                </div>
              </div>

              <hr class="hr-1 mt-10" />
            </div>
          </div>
        </div>
        <div class="w-65">
          <div class="main-1">
            <div class="second-container">
              <div v-for="doc in blogs" :key="doc.id" class="mt-30">
                <div v-if="cur_id == doc.id">
                  <div v-if="!edit_status">
                    <div class="d-flex items-center edit justify-between">
                      <div class="w-25">
                        <div class="d-flex items-center send">
                          <i class="fa-solid fa-user-tie"></i>
                          <p>Отправить получателю</p>
                        </div>
                      </div>
                      <div
                        class="w-50 d-flex items-center justify-between flex-wrap"
                      >
                        <div class="send d-flex items-center">
                          <i class="fa-solid fa-arrow-up"></i>
                          <p>Исходящий</p>
                        </div>
                        <div class="send d-flex items-center">
                          <i class="fa-regular fa-comment-dots"></i>
                          <p>Комментарий</p>
                        </div>
                        <div
                          @click="changeEditStatus()"
                          class="send d-flex items-center edit_btn"
                        >
                          <i class="fa-solid fa-pen-to-square"></i>
                          <p>Редактировать</p>
                        </div>
                        <div class="send d-flex items-center">
                          <i class="fa-solid fa-pen-to-square"></i>
                          <i class="fa-solid fa-caret-down icon-right"></i>
                        </div>
                        <div
                          @click="deleteDoc()"
                          class="send d-flex items-center remove_btn"
                        >
                          <i class="fa-solid fa-trash"></i>
                        </div>
                      </div>
                    </div>
                    <hr class="hr-1" />

                    <div class="application mt-30">
                      <p>Приложение</p>
                    </div>
                    <div class="mt-30 incoming-doc mb-10">
                      <span>Входящий документ {{ doc.incoming }}</span>
                    </div>
                    <hr class="hr-1" />

                    <div class="mt-30">
                      <div class="d-flex items-center">
                        <input type="checkbox" name="" id="" />
                        <p>Очень срочное письмо</p>
                      </div>
                      <div class="d-flex items-center mt-10">
                        <input type="checkbox" name="" id="" />
                        <p>Снято с контроля</p>
                      </div>
                    </div>
                    <hr class="hr-2" />
                    <div class="execution">
                      <div>
                        <p class="mb-10">Срок исполнения:</p>
                        {{ doc.date_of_incoming }}
                      </div>
                    </div>

                    <div class="d-flex justify-between mt-30">
                      <div class="w-50 output-content">
                        <div>
                          <p>Исходящий №:</p>
                          {{ doc.outgoing }}

                          <hr class="hr-1" />
                        </div>
                        <div class="mt-10">
                          <p>Дата исходящего:</p>
                          {{ doc.date_of_outgoing }}

                          <hr class="hr-1" />
                        </div>
                        <div class="mt-10">
                          <p>Корреспондент:</p>
                          {{ doc.correspondent }}

                          <hr class="hr-1" />
                        </div>
                      </div>
                      <div class="w-50 output-content">
                        <div>
                          <p>Вид доставки:</p>
                          {{ doc.type_of_delivery }}

                          <hr class="hr-1" />
                        </div>
                        <div class="mt-10">
                          <p>Регистрационный №:</p>
                          {{ doc.incoming }}

                          <hr class="hr-1" />
                        </div>
                        <div class="mt-10">
                          <p>Дата регистрации:</p>
                          {{ doc.date_of_incoming }}

                          <hr class="hr-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-if="edit_status">
                    <div class="main-3">
                      <div class="d-flex items-center justify-between mb-30">
                        <div
                          @click="changeEditStatus()"
                          class="d-flex items-center edit_btn cansel_btn"
                        >
                          <i class="fa-solid fa-pen-to-square"></i>
                          <p>Отменить</p>
                        </div>
                        <div
                          @click="saveEdit()"
                          class="d-flex items-center edit_btn cansel_btn"
                        >
                          <i class="fa-solid fa-pen-to-square"></i>
                          <p>Сохранить</p>
                        </div>
                      </div>
                      <div class="mb-10">
                        <p>Тема документа:</p>
                        <div class="p-relative">
                          <i
                            class="fa-solid fa-pen-to-square p-absolute mb-10"
                          ></i>
                          <input
                            v-model="documents.theme"
                            type="text"
                            class="w-full"
                          />
                        </div>
                      </div>
                      <div
                        class="d-flex items-center w-full justify-between mb-10"
                      >
                        <div class="w-50">
                          <p>Входящий №:</p>
                          <div class="p-relative">
                            <i class="fa-solid fa-pen-to-square p-absolute"></i>
                            <input
                              v-model="documents.incoming"
                              type="text"
                              class="w-full"
                            />
                          </div>
                        </div>
                        <div class="w-50">
                          <p>Дата входящего:</p>
                          <div class="p-relative">
                            <i class="fa fa-calendar-days p-absolute"></i>
                            <input
                              v-model="documents.date_of_incoming"
                              type="text"
                              class="w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        class="d-flex items-center w-full justify-between mb-10"
                      >
                        <div class="w-50">
                          <p>Исходящий №:</p>
                          <div class="p-relative input-date">
                            <i class="fa-solid fa-pen-to-square p-absolute"></i>
                            <input
                              v-model="documents.outgoing"
                              type="date"
                              class="w-full"
                            />
                          </div>
                        </div>
                        <div class="w-50">
                          <p>Дата исходящего:</p>
                          <div class="p-relative input-date">
                            <i class="fa fa-calendar-days p-absolute"></i>
                            <input
                              v-model="documents.date_of_outgoing"
                              type="date"
                              class="w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="mb-10">
                        <p>Вид доставки:</p>
                        <div class="p-relative">
                          <i
                            class="fa-solid fa-pen-to-square p-absolute mb-10"
                          ></i>
                          <input
                            v-model="documents.type_of_delivery"
                            type="text"
                            class="w-full"
                          />
                        </div>
                      </div>
                      <div class="mb-10">
                        <p>Корреспондент:</p>
                        <div class="p-relative">
                          <i
                            class="fa-solid fa-caret-down icon-right p-absolute mb-10 correspondent"
                          ></i>
                          <input
                            v-model="documents.correspondent"
                            type="text"
                            class="w-full"
                          />
                        </div>
                      </div>
                      <div class="mb-10">
                        <p>Исполнитель:</p>
                        <div class="p-relative">
                          <i
                            class="fa-solid fa-pen-to-square p-absolute mb-10"
                          ></i>
                          <input
                            v-model="documents.performer"
                            type="text"
                            class="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SecondView",
  data() {
    return {
      blogs: [],
      current_doc: [],
      current_id: [],
      cur_id: null,
      edit_status: false,

      documents: {
        theme: null,
        incoming: null,
        date_of_incoming: null,
        outgoing: null,
        date_of_outgoing: null,
        type_of_delivery: null,
        correspondent: null,
        performer: null,
      },
    };
  },

  computed: { ...mapGetters(["allDocuments"]) },
  methods: {
    ...mapActions(["getDocuments"]),

    changeEditStatus() {
      if (this.edit_status) {
        this.edit_status = false;
      } else {
        this.edit_status = true;
      }
    },
    async saveEdit() {
      await axios.put(
        "https://test1-1525a-default-rtdb.firebaseio.com/posts/" +
          this.cur_id +
          ".json",
        this.documents
      );
    },
    async deleteDoc() {
      await axios.delete(
        "https://test1-1525a-default-rtdb.firebaseio.com/posts/" +
          this.cur_id +
          ".json",
        this.documents
      );
      this.$router.go();
    },
  },

  async mounted() {
    this.getDocuments();
    var blogsArray = [];
    for (let key in this.allDocuments) {
      this.allDocuments[key].id = key;
      blogsArray.push(this.allDocuments[key]);
    }
    this.blogs = blogsArray;
    console.log(this.blogs);
  },
};
</script>
