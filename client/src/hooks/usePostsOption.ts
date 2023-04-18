import { useState } from 'react';

import { GetPostsOptions } from '@api/getPosts';

export class PostsOptionSingleton {
  private static instance: PostsOptionSingleton;
  private option: GetPostsOptions;

  private constructor() {
    this.option = { filter: 'all', order: 'newest' };
  }

  public static getInstance(): PostsOptionSingleton {
    if (!PostsOptionSingleton.instance) {
      PostsOptionSingleton.instance = new PostsOptionSingleton();
    }
    return PostsOptionSingleton.instance;
  }

  public getOption(): any {
    return this.option;
  }

  public setOption(newOption: any): void {
    this.option = newOption;
  }
}

export default function usePostsOption() {
  const postOptionInstance = PostsOptionSingleton.getInstance();
  const [option, setOption] = useState<GetPostsOptions>(postOptionInstance.getOption());

  const setFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOption = {
      ...option,
      filter: e.target.value as GetPostsOptions['filter'],
    };
    setOption(newOption);
    postOptionInstance.setOption(newOption);
  };

  const setOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOption = {
      ...option,
      order: e.target.value as GetPostsOptions['order'],
    };
    setOption(newOption);
    postOptionInstance.setOption(newOption);
  };

  return {
    option,
    setFilter,
    setOrder,
  };
}
