import { useCookies } from "@/composable/useCookies";
import { inject } from "vue";
import { VueCookies } from "vue-cookies";
const $cookies = inject<VueCookies>("$cookies");

export default class CookieServices {
  setCookie(name: string, value: string) {
    if ($cookies) $cookies.set(name, value);
  }

  getCookie(name: string) {
    if ($cookies) console.log($cookies.get("auth"));

    return $cookies?.get(name);
  }

  checkExistCookie(name: string) {
    return $cookies?.isKey(name);
  }

  removeCookie(name: string) {
    $cookies?.remove(name);
  }
}
