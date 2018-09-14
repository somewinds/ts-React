/**
 * @version 1.0.0 
 * @interface header
 * @description 公共头部配置
 */
export interface header { 
  name: string; // 标题名字
  path?: string; // 路径名字
  goback?: boolean; // 是否启用返回上级
}