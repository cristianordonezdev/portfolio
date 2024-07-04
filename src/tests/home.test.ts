import { describe, it, expect } from 'vitest'
import HomeView from './../views/HomeView.vue'
import { shallowMount } from "@vue/test-utils";

describe("Hello my main", () => {
  it("should something", () => {
    const wrapper = shallowMount(HomeView)

    expect(wrapper.exists()).toBe(true)
  })
})