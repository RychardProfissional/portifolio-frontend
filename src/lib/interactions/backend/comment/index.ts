import { faker } from "@faker-js/faker";
import { api } from "../../../api";
import { createManager } from "../utils";

interface ICommentManager {
  create(comment: IComment): Promise<IComment>;
  getByID(id: string): Promise<IComment>;
  listByProjectID(project_id: string): Promise<IComment[]>;
  updateText(id: string, ip: string, text: string): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}

class MCommentManager implements ICommentManager {
  create(comment: IComment): Promise<IComment> {
    return new Promise(
      (): IComment => ({
        id: faker.string.uuid(),
        ip: faker.string.uuid(),
        user_name: faker.person.fullName(),
        text: faker.commerce.productDescription(),
        project_id: faker.string.uuid(),
      })
    );
  }

  getByID(id: string): Promise<IComment> {
    return new Promise(
      (): IComment => ({
        id: faker.string.uuid(),
        ip: faker.string.uuid(),
        user_name: faker.person.fullName(),
        text: faker.commerce.productDescription(),
        project_id: faker.string.uuid(),
      })
    );
  }

  listByProjectID(project_id: string): Promise<IComment[]> {
    return new Promise((): IComment[] =>
      faker.helpers.multiple(
        () => ({
          id: faker.string.uuid(),
          ip: faker.string.uuid(),
          user_name: faker.person.fullName(),
          text: faker.commerce.productDescription(),
          project_id: faker.string.uuid(),
        }),
        { count: 5 }
      )
    );
  }

  updateText(id: string, ip: string, text: string): Promise<boolean> {
    return new Promise((): boolean => faker.datatype.boolean());
  }

  delete(id: string): Promise<boolean> {
    return new Promise((): boolean => faker.datatype.boolean());
  }
}

class RCommentManager implements ICommentManager {
  create(comment: IComment): Promise<IComment> {
    return api.post("/comment", comment);
  }

  getByID(id: string): Promise<IComment> {
    return api.get(`/comment/by_id/${id}`);
  }

  listByProjectID(project_id: string): Promise<IComment[]> {
    return api.get(`/comment/by_project_id/${project_id}`);
  }

  updateText(id: string, ip: string, text: string): Promise<boolean> {
    return api.patch(`/comment/${id}/${ip}`, {name: "text", value: text})
  }

  delete(id: string): Promise<boolean> {
    return api.delete(`/comment/${id}`)
  }
}

const comment = createManager(MCommentManager, RCommentManager);

export default comment;
