import { showNotification } from "@mantine/notifications";

import i18n from "../../i18n";

function setCoverPhoto() {
  showNotification({
    message: i18n.t("toasts.setcoverphoto"),
    title: i18n.t("toasts.setcoverphototitle"),
    color: "teal",
  });
}

function addPhotosToAlbum(title: string, numberOfPhotos: number) {
  showNotification({
    message: i18n.t("toasts.addtoalbum", { title, numberOfPhotos }),
    title: i18n.t("toasts.addtoalbumtitle"),
    color: "teal",
  });
}

function removePhotosFromAlbum(title: string, numberOfPhotos: number) {
  showNotification({
    message: i18n.t("toasts.removefromalbum", { title, numberOfPhotos }),
    title: i18n.t("toasts.removefromalbumtitle"),
    color: "teal",
  });
}

function createAlbum(title: string, numberOfPhotos: number) {
  showNotification({
    message: i18n.t("toasts.createnewalbum", { title, numberOfPhotos }),
    title: i18n.t("toasts.createalbumtitle"),
    color: "teal",
  });
}

function renameAlbum(oldTitle: string, newTitle: string) {
  showNotification({
    message: i18n.t("toasts.renamealbum", { oldTitle, newTitle }),
    title: i18n.t("toasts.renamealbumtitle"),
    color: "teal",
  });
}

function deleteAlbum(albumTitle: string) {
  showNotification({
    message: i18n.t("toasts.deletealbum", { albumTitle }),
    title: i18n.t("toasts.deletealbumtitle"),
    color: "teal",
  });
}

function deleteAutogeneratedAlbums() {
  showNotification({
    message: i18n.t("toasts.deleteallautoalbums"),
    title: i18n.t("toasts.deleteallautoalbumstitle"),
    color: "teal",
  });
}

function generateEventAlbums() {
  showNotification({
    message: i18n.t("toasts.generateeventalbums"),
    title: i18n.t("toasts.generateeventalbumstitle"),
    color: "teal",
  });
}

function regenerateEventAlbums() {
  showNotification({
    message: i18n.t("toasts.regenerateevents"),
    title: i18n.t("toasts.regenerateeventstitle"),
    color: "teal",
  });
}

function toggleAlbumSharing(share: boolean) {
  showNotification({
    message: i18n.t(share ? "toasts.sharingalbum" : "toasts.unsharingalbum"),
    title: i18n.t(share ? "toasts.sharingalbumtitle" : "toasts.unsharingalbumtitle"),
    color: "teal",
  });
}

export const albums = {
  addPhotosToAlbum,
  createAlbum,
  deleteAlbum,
  deleteAutogeneratedAlbums,
  generateEventAlbums,
  regenerateEventAlbums,
  removePhotosFromAlbum,
  renameAlbum,
  setCoverPhoto,
  toggleAlbumSharing,
};