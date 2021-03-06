export class Constantes {

    //ENDPOINTS
    static endpoint = "http://localhost";
    static port = ":8080";

    //APIs
    static apiLogin = "/login";
    static apiProcessos = "/processos";
    static apiUsuario = "/usuario";
    static apiReu = "/reu";

    //METODOS
    static login = "/login";
    static cadastrar_usuario = "/cadastrar-usuario";
    static listar_usuarios = "/listar-usuarios";
    static processo = "/processo";
    static lista_processos = "/lista-processos";
    static reu = "/reu";
    static lista_reu = "/listar-reu";
    static excluir_reu = "/excluir-reu"

    //MENSAGENS
    static usuario_senha_invalidos = "O usuário ou a senha digitados são inválidos.";
    static email_ja_cadastrado = "Este email já está sendo utilizado por outro usuário.";
    static entre_contato_administrador = "Entre em contato com o administrador do sistema."
    static erro_desconhecido = "Ocorreu um erro desconhecido.";

}