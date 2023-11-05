/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface user {
  title: string,
}

class Component {
  constructor (public props: Pick<user, 'title'>) {

  }
}

class Page extends Component {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};