const repos = [
    {
        name: 'Repo 1'
    },
    {
        name: 'Repo 2'
    }
];


module.exports = {
    get: function(){
        return Promise.resolve({data: repos});
    }
};