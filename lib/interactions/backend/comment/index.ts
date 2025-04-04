import request from "../../../api";

interface ICommentManager {
  create(comment: IComment): Promise<IComment>;
  getByID(id: string): Promise<IComment>;
  listByProjectID(project_id: string): Promise<IComment[]>;
  updateText(id: string, text: string): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}

class MCommentManager implements ICommentManager {
  create(comment: IComment): Promise<IComment> {
    return new Promise(
      (): IComment => ({
        id: "",
        ip: "",
        user_name: "",
        text: "",
        project_id: "",
      })
    );
  }

  getByID(id: string): Promise<IComment> {
    return new Promise(
      (): IComment => ({
        id: "",
        ip: "",
        user_name: "",
        text: "",
        project_id: "",
      })
    );
  }

  listByProjectID(project_id: string): Promise<IComment[]> {
    return new Promise((): IComment[] => [
      {
        id: "",
        ip: "",
        user_name: "",
        text: "",
        project_id: "",
      },
    ]);
  }

  updateText(id: string, text: string): Promise<boolean> {
    return new Promise((): boolean => false);
  }
  
  delete(id: string): Promise<boolean> {
    return new Promise((): boolean => false);
  }
}

function GetCommentManager(): ICommentManager {
  return new MCommentManager;
}

export default GetCommentManager;
