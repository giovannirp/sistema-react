import React, { Component } from "react";
import axios from "axios";

const baseUrl = "http://localhost:3001/users";
const initState = {
  user: { name: "", email: "", telefone: "" },
  list: [],
};

class UserCrud extends Component {
  state = { ...initState };

  componentDidMount() {
    axios(baseUrl).then((resp) => {
      this.setState({ list: resp.data });
    });
  }

  updateField(event) {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  clear() {
    this.setState({ user: initState.user });
  }

  save() {
    const user = this.state.user;
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
    axios[method](url, user).then((resp) => {
      const list = this.getUpdateList(resp.data);
      this.setState({ user: initState.user, list });
    });
  }

  getUpdateList(user, add = true) {
    const list = this.state.list.filter((u) => u.id !== user.id);
    if (add) {
      list.unshift(user);
    }
    return list;
  }

  renderForm() {
    return (
      <div className="form mt-4 mb-4">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label className="text-danger">Nome</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.user.name}
                onChange={(e) => this.updateField(e)}
                placeholder="Digite o nome"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label className="text-danger">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={this.state.user.email}
                onChange={(e) => this.updateField(e)}
                placeholder="Digite seu email"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label className="text-danger">Telefone</label>
              <input
                type="text"
                className="form-control"
                name="telefone"
                value={this.state.user.telefone}
                onChange={(e) => this.updateField(e)}
                placeholder="Digite seu Telefone"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-center mb-4 ml-2">
            <button
              className="btn btn-primary mr-3"
              onClick={(e) => this.save(e)}
            >
              Salvar
            </button>
            <button className="btn btn-danger" onClick={(e) => this.clear()}>
              Limpar
            </button>
          </div>
        </div>
      </div>
    );
  }

  changeNew(user) {
    this.setState({ user });
  }

  remove(user) {
    axios.delete(`${baseUrl}/${user.id}`).then((resp) => {
        const list = this.getUpdateList(user, false);
        this.setState({ list })
    })
  }

  renderTable() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Editar</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }

  renderRows() {
    return this.state.list.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.telefone}</td>
          <td>
            <button className="btn btn-success" onClick={() => this.changeNew(user)}>
              <strong>Editar</strong>
            </button>
          </td>
          <td>
            <button className="btn btn-danger" onClick={() => this.remove(user)}>
              <strong>Apagar</strong>
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderForm()}
        {this.renderTable()}
      </div>
    );
  }
}

export default UserCrud;
