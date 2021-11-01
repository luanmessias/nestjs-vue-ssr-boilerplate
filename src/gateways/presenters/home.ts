import { Injectable } from '@nestjs/common'

Injectable()
export class HomePresenter {
  getContext(url: string, state: Object): Object {
    const title = 'vue page'
    const context = {
      title,
      url,
      state: {
        ...state,
      },
    }

    return context
  }
}
