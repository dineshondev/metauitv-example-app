/**
 *  This is generated file. Do not edit !!
 *
 *  @formatter:off
 *
 */
/* tslint:disable */
export const TaskRule = '/*     User rules.oss -- Meta-data rules. Generated file      Default definition */ class=Task {      field=uniqueName {            label:"Id";        }         field=name {            label:"Name";        }         field=description {            trait:longtext;        }         zNone => *;        zLeft => uniqueName => name => description => created; }  /*   Sample definition for operations edit and create  */ class=Task {    operation=(edit, create) {       zNone => *;       zLeft => name => description;    }    operation=(create) {       zNone => *;       zLeft => name => description => created;    }  } ';
/* tslint:disable */
/**
 *  @formatter:on
 *
 */
 