import { Injectable } from '@angular/core';
import { User } from './models/user.model';

export interface ISocialHandler {
    handleAuthData(data: any);
}

export class Social {

    socialMap: { [name: string]: ISocialHandler; }[] = [];

    constructor() {
        this.socialMap.push({ 'vkontakte': new VKHandler });
        this.socialMap.push({ 'facebook': new FbHandler });
        this.socialMap.push({ 'twitter': new TwitterHandler });
    }

    public createUserModelFromAuthResult(data: JSON) : User {
        let object: any = data;
        let handler = this.findHandler(object.identities[0].provider);
        return handler.handleAuthData(data);

    }

    private findHandler(name: string) {
        for (var key in this.socialMap) {
            if (this.socialMap[key].hasOwnProperty(name)) {
                return this.socialMap[key][name];
            }
        }
    }

}

class VKHandler implements ISocialHandler {

    handleAuthData(data: any) {
        let user = new User;
        let date:string =  data.created_at;
        return user = {
            username: data.nickname,
            createdAt: date.substring(0,10),
            authId: data.clientID,
            imageUrl: data.picture,
            link: data.link,
            role: null,
            social: 'vkontakte'
        }
    }

}

class FbHandler implements ISocialHandler {

    handleAuthData(data: any) {
        let user = new User;
        let date:string =  data.created_at;
        return user = {
            username: data.nickname,
            createdAt: date.substring(0,10),
            authId: data.clientID,
            imageUrl: data.picture_large,
            link: data.link,
            role: null,
            social: 'facebook'
        }
    }

}

class TwitterHandler implements ISocialHandler {

    handleAuthData(data: any) {
        let user = new User;
        let date:string =  data.created_at;
        return user = {
            username: data.nickname,
            createdAt: date.substring(0,10),
            authId: data.clientID,
            imageUrl: data.picture,
            link: 'https://twitter.com/'+data.nickname,
            role: null,
            social: 'twitter'
        }
    }

}