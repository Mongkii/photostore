import Editor from '../Editor';
import FilterBlur from '../FilterBlur';
import FilterGray from '../FilterGray';
import FilterShadow from '../FilterShadow';
import FilterHue from '../FilterHue';
import BlendHue from '../BlendHue';
import BlendLighten from '../BlendLighten';
import BlendScreenA from '../BlendScreenA';
import BlendScreenB from '../BlendScreenB';
import BlendMultiply from '../BlendMultiply';
import AdvanceAnimation from '../AdvanceAnimation';
import AdvanceMarvel from '../AdvanceMarvel';
import AdvanceInteract from '../AdvanceInteract';

const pageMapper = [
  {
    title: '编辑器',
    key: 'Editor',
    comp: Editor,
  },
  {
    title: 'blur 滤镜',
    key: 'FilterBlur',
    comp: FilterBlur,
  },
  {
    title: 'grayscale 滤镜',
    key: 'FilterGray',
    comp: FilterGray,
  },
  {
    title: 'drop-shadow 滤镜',
    key: 'FilterShadow',
    comp: FilterShadow,
  },
  {
    title: 'hue-rotate 滤镜',
    key: 'FilterHue',
    comp: FilterHue,
  },
  {
    title: 'hue 混合模式',
    key: 'BlendHue',
    comp: BlendHue,
  },
  {
    title: 'lighten 混合模式',
    key: 'BlendLighten',
    comp: BlendLighten,
  },
  {
    title: 'screen 混合模式-1',
    key: 'BlendScreenA',
    comp: BlendScreenA,
  },
  {
    title: 'screen 混合模式-2',
    key: 'BlendScreenB',
    comp: BlendScreenB,
  },
  {
    title: 'multiply 混合模式',
    key: 'BlendMultiply',
    comp: BlendMultiply,
  },
  {
    title: '高级用法：动画',
    key: 'AdvanceAnimation',
    comp: AdvanceAnimation,
  },
  {
    title: '高级用法：漫威片头',
    key: 'AdvanceMarvel',
    comp: AdvanceMarvel,
  },
  {
    title: '高级用法：交互效果',
    key: 'AdvanceInteract',
    comp: AdvanceInteract,
  },
];

export default pageMapper;
