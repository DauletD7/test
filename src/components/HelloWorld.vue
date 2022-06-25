<template>
  <div class="main">
    <div class="container">
      <div class="save-doc bg-white">
        <div class="cancel block-1">
          <i class="fa-solid fa-left-long"></i>
          <p>Отмена</p>
        </div>
        <div @click="docPost()" class="save block-1 btn">
          <i class="fa-regular fa-floppy-disk"></i>
          <p>Сохранить</p>
        </div>
      </div>

      <div class="main-content bg-white">
        <div class="heading-bl">
          <p class="heading">Входящий документ</p>
        </div>

        <form action="#">
          <div class="check-content">
            <input type="checkbox" name="" id="" />
            <p>Очень срочное письмо</p>
          </div>
          <div class="check-content">
            <input type="checkbox" name="" id="" />
            <p>Снято с контроля</p>
          </div>

          <div class="check-2">
            <div>
              <div class="check-2-content">
                <input type="checkbox" name="" id="" />
                <p>Неконтрольный документ</p>
              </div>
              <div class="check-2-content">
                <input type="checkbox" name="" id="" />
                <p>Передан в бумажном виде</p>
              </div>
            </div>

            <div class="check-2-right">
              <div class="check-2-content">
                <input type="checkbox" name="" id="" />
                <p>Для служебного пользования</p>
              </div>
              <div class="check-2-content">
                <input type="checkbox" name="" id="" />
                <p>ДирОРД</p>
              </div>
              <div class="check-2-content">
                <input type="checkbox" name="" id="" />
                <p>Внутренняя корреспонденция</p>
              </div>
              <div class="check-2-content">
                <input type="checkbox" name="" id="" />
                <p>Ответ на исходящее</p>
              </div>
            </div>
          </div>

          <div class="main-3">
            <div class="mb-10">
              <p>Тема документа:</p>
              <div class="p-relative">
                <i class="fa-solid fa-pen-to-square p-absolute mb-10"></i>
                <input v-model="documents.theme" type="text" class="w-full" />
              </div>
            </div>
            <div class="d-flex items-center w-full justify-between mb-10">
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
            <div class="d-flex items-center w-full justify-between mb-10">
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
                <i class="fa-solid fa-pen-to-square p-absolute mb-10"></i>
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
                <i class="fa-solid fa-pen-to-square p-absolute mb-10"></i>
                <input
                  v-model="documents.performer"
                  type="text"
                  class="w-full"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HelloWorld",

  data() {
    return {
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
  methods: {
    ...mapActions(["getDocuments"]),

    async docPost() {
      await axios.post(
        "https://test1-1525a-default-rtdb.firebaseio.com/posts.json",
        this.documents
      );
      var clist = document.getElementsByTagName("input");
      for (var i = 0; i < clist.length; ++i) {
        clist[i].checked = false;
      }
      this.documents.theme =
        this.documents.incoming =
        this.documents.date_of_incoming =
        this.documents.outgoing =
        this.documents.date_of_outgoing =
        this.documents.type_of_delivery =
        this.documents.correspondent =
        this.documents.performer =
          "";
      this.$router.go();
    },
  },
  computed: { ...mapGetters(["allDocuments"]) },

  async mounted() {
    this.getDocuments();
  },
};
</script>
