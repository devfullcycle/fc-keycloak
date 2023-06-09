# Implicit Flow

O fluxo Implicit Flow é geralmente recomendado para aplicativos de página única (single-page applications) e aplicativos móveis em que a confidencialidade do cliente não é uma prioridade. Esse fluxo simplifica o processo de autorização, permitindo que o cliente (aplicativo) obtenha o token de acesso diretamente do servidor de autorização, sem a necessidade de uma troca adicional de código de autorização.

O fluxo Implicit Flow é mais adequado quando você possui um aplicativo front-end JavaScript que interage diretamente com o servidor de autorização. Nesse fluxo, o aplicativo faz uma solicitação de autorização ao servidor de autorização, que responde fornecendo o token de acesso diretamente no navegador do usuário.

No entanto, o fluxo Implicit Flow apresenta algumas limitações de segurança em comparação com o fluxo Authorization Code Flow. O token de acesso é retornado diretamente no navegador do usuário, o que pode expô-lo a ataques de cross-site scripting (XSS) se as devidas precauções de segurança não forem tomadas. Além disso, o fluxo Implicit Flow não permite a renovação de tokens de acesso sem a intervenção do usuário.

Em resumo, o fluxo Implicit Flow é recomendado para aplicativos de página única e aplicativos móveis em que a confidencialidade do cliente não é uma preocupação crítica, e quando a simplicidade de obtenção do token de acesso diretamente no navegador do usuário é uma consideração importante. No entanto, é importante estar ciente das limitações de segurança associadas a esse fluxo e implementar as medidas apropriadas para proteger os tokens de acesso.

Uma coisa a observar é que apenas um token de acesso é fornecido e não há token de atualização. Isso significa que uma vez que o token de acesso expirou, o aplicativo deve fazer o redirecionamento para o Keycloak novamente para obter um novo token de acesso.

## Single Sign On

Similar ao Authorization Code Flow, o Implicit Flow também suporta Single Sign On (SSO). O SSO permite que um usuário faça login em um aplicativo e seja autenticado em outros aplicativos automaticamente, sem precisar fornecer suas credenciais novamente.

## Configuração

response_type=token ou response_type=token id_token

## A hashtag é acrescentada ao redirecionamento

http://localhost:3000/callback#state=YKWruxpK9QzU3vwOi5IxWg%3D%3D&session_state=593006ef-0a13-4472-bfef-5f4776fe3441&access_token=XXXXX&id_token=XXXXX&token_type=Bearer&expires_in=900