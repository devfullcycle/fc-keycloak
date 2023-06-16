# Hybrid Flow

No Hybrid Flow, a primeira parte do fluxo é semelhante ao fluxo Authorization Code Flow, onde o cliente solicita uma autorização para o servidor de autorização e recebe um código de autorização. No entanto, ao contrário do Authorization Code Flow, no Hybrid Flow, o cliente também recebe o access token imediatamente após a troca do código de autorização, antes de fazer uma segunda chamada ao servidor de autorização.

O risco de segurança no Hybrid Flow está na revelação prematura do access token, pois ele é retornado diretamente ao cliente após a troca do código de autorização, antes de qualquer interação com o servidor. Isso significa que o token é exposto no front-end, onde potenciais vulnerabilidades podem ser exploradas para obter acesso não autorizado ao token.

O Hybrid Flow é mais adequado para aplicativos front-end JavaScript que interagem diretamente com o servidor de autorização. No entanto, é importante estar ciente das limitações de segurança associadas a esse fluxo e implementar as medidas apropriadas para proteger os tokens de acesso.

## Single Sign On

Similar ao Authorization Code Flow e Implicit Flow, o Hybrid Flow também suporta Single Sign On (SSO). O SSO permite que um usuário faça login em um aplicativo e seja autenticado em outros aplicativos automaticamente, sem precisar fornecer suas credenciais novamente.

## Configuração

response_type=code token ou response_type=code token id_token

## A hashtag é acrescentada ao redirecionamento

http://localhost:3000/callback#state=YKWruxpK9QzU3vwOi5IxWg%3D%3D&session_state=593006ef-0a13-4472-bfef-5f4776fe3441&code=XXXXX&access_token=XXXXX&id_token=XXXXX&token_type=Bearer&expires_in=900