import User from '@models/User';

export default class UsersController {
  private currentName: string = 'teste';

  test() {
    const user = new User();
    user.name = this.currentName;
    return user.name;
  }
}
