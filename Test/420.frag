#version 420 core

layout(depth_any) out float gl_FragDepth;
layout(depth_greater) out float gl_FragDepth; // ERROR: redeclaration with different qualifier

void main()
{
    gl_FragDepth = 0.3;
}

layout(depth_less) in float depth; // ERROR: depth_less only applies to gl_FragDepth
layout(depth_any) out float gl_FragDepth;  // ERROR, done after use

layout(binding=0) uniform atomic_uint a[];

uniform writeonly image2D      i2D;
ivec2 iv2dim = imageSize(i2D); // ERROR: imageSize called without enabling GL_ARB_shader_image_size extension
#extension GL_ARB_shader_image_size : enable
ivec2 iv2dim1 = imageSize(i2D);
