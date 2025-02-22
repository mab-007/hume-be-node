const HumeUtils = {
    getHumeUrl: (url: string) => {

        const humeUrl = 'https://api.hume.ai';
        switch (url) {
            case 'list-tools':

                return {url: `${humeUrl}/v0/evi/tools`, method: 'GET'};
            case 'create-tool':
                return {url: `${humeUrl}/v0/evi/tools`, method: 'POST'};
            case 'list-tool-versions':
                return {url: `${humeUrl}/v0/evi/tools/:id`, method: 'GET'};
            case 'get-tool-version':
                return {url: `${humeUrl}/v0/evi/tools/versions/:id`, method: 'POST'};
            case 'delete-tool':
                return {url: `${humeUrl}/v0/evi/tools/:id`, method: 'DELETE'};
            case 'update-tool-name':
                return {url: `${humeUrl}/v0/evi/tools/:id`, method: 'GET'};
            case 'get-tool-version':
                return {url: `${humeUrl}/v0/evi/tools/:id/version/:version`, method: 'GET'};
            case 'delete-tool-version':
                return {url: `${humeUrl}/v0/evi/tools/:id/version/:version`, method: 'DELETE'}
            case 'update-tool-description':
                return {url: `${humeUrl}/v0/evi/tools/:id/version/:version`, method: 'PATCH'};
            default:
                return url;
        }
    }

}

export default HumeUtils;