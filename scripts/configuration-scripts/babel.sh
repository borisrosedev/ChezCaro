echo """
module.exports = {
    presets: [
        [
            \"@babel/preset-env\",
            {
                targets: {
                    node: \"current\"
                }
            
            }  
        ]
    ]
}
""" >> ../../babel.config.js