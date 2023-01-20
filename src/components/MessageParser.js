import React from 'react';

class MessageParser extends React.Component {
constructor(ActionProvider) {
        super(ActionProvider);
        this.ActionProvider=ActionProvider;
}
    parse(message)
    {
        const lowermsg=message.toLowerCase()
        if(lowermsg.includes("hello"))
        {
            this.ActionProvider.greet();
        }
        else if(lowermsg.includes("namste"))
        {
            this.ActionProvider.namste();
        }
        else if(lowermsg.includes("hola"))
        {
            this.ActionProvider.hola();
        }
        else if(lowermsg.includes("hobbies"))
        {
            this.ActionProvider.Hobbies();
        }
        else if(lowermsg.includes("do you like me"))
        {
            this.ActionProvider.like();
        }
        else if(lowermsg.includes("hi"))
        {
            this.ActionProvider.greet();
        }
        else if(lowermsg.includes("how are you"))
        {
            this.ActionProvider.How();
        }
        else if(lowermsg.includes("personal info"))
        {
            this.ActionProvider.handlePersonalInfo();
        } 
        else if(lowermsg.includes("academic info"))
        {
            this.ActionProvider.handleAcademiclInfo();
        }
        else if(lowermsg.includes("projects info"))
        {
            this.ActionProvider.handleProjectInfo();
        }
        else if(lowermsg.includes("technical stack"))
        {
            this.ActionProvider.technical();
        }
        else if(lowermsg.includes("contact"))
        {
            this.ActionProvider.contacts();
        }
        else if(lowermsg.includes("motivate"))
        {
            this.ActionProvider.motivate();
        }
        else if(lowermsg.includes("fav song"))
        {
            this.ActionProvider.song();
        }
        else if(lowermsg.includes("happy"))
        {
            this.ActionProvider.moody();
        }
        else
        {
            this.ActionProvider.sorry();
        }
    }
    render() {
        return <div></div>;
    }
}

export default MessageParser;