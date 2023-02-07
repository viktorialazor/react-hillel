export default class ContactApi {
  static URL = "https://62e67c22de23e263792d127c.mockapi.io/contacts/";
  static NOT_FOUND = 404;

  static request(url = "", method = "GET", body) {
    return fetch(ContactApi.URL + url, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        "Content-type": "application/json",
      },
    }).catch((e) => {
      throw new Error(`ContactApi cannot execute request: ${e.message}`);
    });
  }

  static getList() {
    return ContactApi.request().then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error("Cannot retrive contact list");
    });
  }

  static create(contact) {
    return ContactApi.request("", "POST", contact).then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error("Cannot create new contact");
    });
  }

  static delete(id) {
    return ContactApi.request(id, "DELETE").then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error(`Cannot delete contact with id '${id}'`);
    });
  }
}
