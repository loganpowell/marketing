let imageTagsRegex = /<img [^>]*src="[^"]*"[^>]*>/gm

const imageSrcRegex = /.*src="([^"]*)".*/

let string = "<p>This content was added into the \"Body\" when converted from a note to an issue</p>\n<p>This was added ex-post to see how to include an image:<br>\n<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://camo.githubusercontent.com/0c193787c649a6553cdcb53afd839eb30c7ff188/68747470733a2f2f63646e2e766f782d63646e2e636f6d2f7468756d626f722f334b41325f6d4271434e6c5074433448674a32313877534d674e303d2f3078303a31323030783638302f31323030783830302f66696c746572733a666f63616c28353437783136383a37333978333630292f63646e2e766f782d63646e2e636f6d2f75706c6f6164732f63686f7275735f696d6167652f696d6167652f36333133373538362f64756e655f313938345f6765726d616e795f302e302e6a7067\"><img src=\"https://camo.githubusercontent.com/0c193787c649a6553cdcb53afd839eb30c7ff188/68747470733a2f2f63646e2e766f782d63646e2e636f6d2f7468756d626f722f334b41325f6d4271434e6c5074433448674a32313877534d674e303d2f3078303a31323030783638302f31323030783830302f66696c746572733a666f63616c28353437783136383a37333978333630292f63646e2e766f782d63646e2e636f6d2f75706c6f6164732f63686f7275735f696d6167652f696d6167652f36333133373538362f64756e655f313938345f6765726d616e795f302e302e6a7067\" alt=\"image\" data-canonical-src=\"https://cdn.vox-cdn.com/thumbor/3KA2_mBqCNlPtC4HgJ218wSMgN0=/0x0:1200x680/1200x800/filters:focal(547x168:739x360)/cdn.vox-cdn.com/uploads/chorus_image/image/63137586/dune_1984_germany_0.0.jpg\" style=\"max-width:100%;\"></a></p>"

const imageTags = string.match(imageTagsRegex)
// imageTags//?

const imageSrcs = imageTags.map(img => img.replace(/.*src="([^"]*)".*/, '$1'))
imageSrcs //?


let test = []

test.length //?